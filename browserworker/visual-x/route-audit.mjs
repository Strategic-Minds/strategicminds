import { chromium } from "playwright";
import fs from "node:fs";
import crypto from "node:crypto";

const baseUrl = process.env.VISUAL_X_BASE_URL;
if (!baseUrl) {
  throw new Error("VISUAL_X_BASE_URL is required. Point it at a preview or workspace URL, never production by default.");
}

const approvedRoutes = {
  "/app/home": "Design, quote",
  "/app/scan": "Scan",
  "/app/visualizer": "Visual",
  "/app/compare": "Compare",
  "/app/blends": "Flake",
  "/app/metallic": "Metallic",
  "/app/products": "Products",
  "/app/quote": "Quote",
  "/app/proposal": "Proposal",
  "/app/lead": "Lead",
};

const routes = [
  "/", "/projects", "/more", "/visualizer", "/generator", "/products",
  "/colors", "/leads", "/systems", "/pricing", "/appointments", "/receipts",
  "/guardrails", "/close", "/inbox", "/settings", "/competitive-pricing",
  "/industry", "/lead-generator", "/crm", "/email-templates", "/bid-generator",
  ...Object.keys(approvedRoutes),
];

const outputDir = process.env.BROWSERWORKER_OUTPUT_DIR || "browserworker-output";
fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const results = [];
for (const viewport of [
  { name: "mobile", width: 430, height: 932 },
  { name: "desktop", width: 1440, height: 1000 },
]) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
    colorScheme: "dark",
  });

  for (const route of routes) {
    if (viewport.name === "desktop" && route.startsWith("/app/")) continue;

    const page = await context.newPage();
    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];

    page.on("console", message => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", error => pageErrors.push(String(error)));
    page.on("requestfailed", request => failedRequests.push({
      url: request.url(),
      error: request.failure()?.errorText || "",
    }));

    let status = null;
    let navigationError = "";
    const startedAt = Date.now();
    try {
      const response = await page.goto(new URL(route, baseUrl).href, {
        waitUntil: "domcontentloaded",
        timeout: 30_000,
      });
      status = response?.status() || null;
      await page.waitForTimeout(1_500);
    } catch (error) {
      navigationError = String(error);
    }

    const bodyText = await page.locator("body").innerText().catch(() => "");
    const headings = await page.locator("h1,h2").allTextContents().catch(() => []);
    const brokenImages = await page.locator("img").evaluateAll(images =>
      images
        .filter(image => !image.complete || image.naturalWidth === 0)
        .map(image => image.getAttribute("src"))
    ).catch(() => []);
    const horizontalOverflow = await page.evaluate(() =>
      document.documentElement.scrollWidth > document.documentElement.clientWidth + 2
    ).catch(() => false);

    const fileName = `${viewport.name}-${route === "/" ? "root" : route.slice(1).replaceAll("/", "-")}.png`;
    const screenshotPath = `${outputDir}/${fileName}`;
    await page.screenshot({ path: screenshotPath, fullPage: true }).catch(() => {});

    let screenshot = null;
    if (fs.existsSync(screenshotPath)) {
      const bytes = fs.readFileSync(screenshotPath);
      screenshot = {
        file: fileName,
        bytes: bytes.length,
        sha256: crypto.createHash("sha256").update(bytes).digest("hex"),
      };
    }

    const expectedHeading = approvedRoutes[route] || null;
    const approvedRouteIdentity = expectedHeading
      ? page.url() === new URL(route, baseUrl).href &&
        headings.some(heading => heading.toLowerCase().includes(expectedHeading.toLowerCase()))
        ? "PASS"
        : "FAIL"
      : "NOT_APPLICABLE";

    results.push({
      viewport: viewport.name,
      route,
      status,
      finalUrl: page.url(),
      loadMs: Date.now() - startedAt,
      navigationError,
      headings,
      bodySnippet: bodyText.slice(0, 800),
      pageErrors: [...new Set(pageErrors)],
      consoleErrors: [...new Set(consoleErrors)],
      failedRequests,
      brokenImages: [...new Set(brokenImages)],
      horizontalOverflow,
      approvedRouteIdentity,
      screenshot,
    });

    await page.close();
  }
  await context.close();
}
await browser.close();

const mobile = results.filter(result => result.viewport === "mobile");
const report = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  status: "FAIL",
  summary: {
    testCount: results.length,
    mobileRouteCount: mobile.length,
    approvedRouteIdentityPass: mobile.filter(result => result.approvedRouteIdentity === "PASS").length,
    approvedRouteIdentityFail: mobile.filter(result => result.approvedRouteIdentity === "FAIL").length,
    routesWithPageErrors: mobile.filter(result => result.pageErrors.length).length,
    routesWithConsoleErrors: mobile.filter(result => result.consoleErrors.length).length,
    routesWithBrokenImages: mobile.filter(result => result.brokenImages.length).length,
    routesWithHorizontalOverflow: mobile.filter(result => result.horizontalOverflow).length,
  },
  results,
};

report.status =
  report.summary.approvedRouteIdentityFail === 0 &&
  report.summary.routesWithPageErrors === 0 &&
  report.summary.routesWithConsoleErrors === 0 &&
  report.summary.routesWithBrokenImages === 0
    ? "PASS"
    : "FAIL";

fs.writeFileSync(`${outputDir}/BROWSER_AUDIT.json`, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report.summary, null, 2));
process.exitCode = report.status === "PASS" ? 0 : 1;
