import manifest from '../tests/preview-route-manifest.json' with { type: 'json' };

const baseUrl = process.argv[2];
if (!baseUrl) {
  console.error('Usage: npm run validate:preview -- <preview-url>');
  process.exit(1);
}

const failures = [];

async function check(path, expectation) {
  const response = await fetch(new URL(path, baseUrl), { redirect: 'manual' });
  const text = await response.text();
  const record = { path, status: response.status, location: response.headers.get('location'), text: text.slice(0, 240) };

  if (expectation === 'ok' && response.status !== 200) failures.push(record);
  if (expectation === 'not_found' && response.status !== 404) failures.push(record);
  if (expectation === 'client_redirect' && !(response.status >= 300 && response.status < 400 && record.location?.includes('/login'))) failures.push(record);
  if (expectation === 'unauthorized' && response.status !== 401) failures.push(record);

  console.log(JSON.stringify({ expectation, ...record }));
}

for (const route of manifest.publicRoutes) await check(route, 'ok');
for (const route of manifest.notFoundRoutes) await check(route, 'not_found');
for (const route of manifest.clientRoutes) await check(route, 'client_redirect');
for (const route of manifest.adminRoutes) await check(route, 'unauthorized');
for (const route of manifest.apiRoutes) await check(route, 'ok');
for (const route of manifest.cronRoutes) await check(route, 'unauthorized');

if (failures.length) {
  console.error(JSON.stringify({ failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ status: 'passed', checked: manifest }, null, 2));
