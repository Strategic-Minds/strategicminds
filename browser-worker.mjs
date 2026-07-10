import http from 'node:http';
import { chromium } from 'playwright';

const port = Number(process.env.PORT || 4011);

function sendJson(res, statusCode, body) {
  const payload = JSON.stringify(body, null, 2);
  res.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(payload),
  });
  res.end(payload);
}

async function launchChromiumReceipt() {
  const startedAt = new Date().toISOString();
  const browser = await chromium.launch({ headless: true });
  const version = browser.version();
  const page = await browser.newPage();
  await page.goto('about:blank');
  await page.close();
  await browser.close();
  return {
    ok: true,
    status: 'pass',
    launched: true,
    browser: 'chromium',
    version,
    startedAt,
    finishedAt: new Date().toISOString(),
  };
}

async function handleRequest(req, res) {
  const url = new URL(req.url || '/', `http://${req.headers.host || '127.0.0.1'}`);

  if (req.method === 'GET' && url.pathname === '/health') {
    try {
      const receipt = await launchChromiumReceipt();
      return sendJson(res, 200, receipt);
    } catch (error) {
      return sendJson(res, 500, {
        ok: false,
        status: 'fail',
        launched: false,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  if (req.method === 'POST' && url.pathname === '/run') {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const raw = Buffer.concat(chunks).toString('utf8') || '{}';
    const payload = JSON.parse(raw);
    const { type, targetUrl } = payload;

    if (type === 'launch-check') {
      try {
        const receipt = await launchChromiumReceipt();
        return sendJson(res, 200, { ok: true, receipt });
      } catch (error) {
        return sendJson(res, 500, {
          ok: false,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }

    return sendJson(res, 400, {
      ok: false,
      error: 'unsupported job type',
      received: { type, targetUrl },
    });
  }

  return sendJson(res, 404, {
    ok: false,
    error: 'not found',
    routes: ['/health', '/run'],
  });
}

http.createServer((req, res) => {
  handleRequest(req, res).catch((error) => {
    sendJson(res, 500, {
      ok: false,
      status: 'error',
      error: error instanceof Error ? error.message : String(error),
    });
  });
}).listen(port, '127.0.0.1', () => {
  console.log(`browser worker listening on http://127.0.0.1:${port}`);
});
