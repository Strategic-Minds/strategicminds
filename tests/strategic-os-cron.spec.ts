type CronValidationCase = {
  name: string;
  request: {
    authorization?: string;
  };
  expectedStatus: number;
  expectedReason: string;
};

export const strategicOSCronValidationCases: CronValidationCase[] = [
  {
    name: 'blocks missing authorization',
    request: {},
    expectedStatus: 401,
    expectedReason: 'Cron route must reject unsigned requests.'
  },
  {
    name: 'blocks wrong bearer token',
    request: { authorization: 'Bearer wrong-token' },
    expectedStatus: 401,
    expectedReason: 'Cron route must only accept the configured CRON_SECRET bearer token.'
  },
  {
    name: 'accepts signed Vercel cron request',
    request: { authorization: 'Bearer ${CRON_SECRET}' },
    expectedStatus: 202,
    expectedReason: 'Signed cron request should start strategicOSValidationWorkflow and return an accepted response.'
  }
];

export const requiredStrategicOSRouteChecks = [
  'CRON_SECRET is required',
  'Unsigned requests are denied',
  'Signed requests return 202',
  'Response includes runId and receiptId',
  'No secret values appear in response body',
  'Chromium browser worker env is detected by workflow checks when configured',
  'Repair blocks are returned through the workflow result for operator review'
];
