import type { StrategicOSReceipt } from '../receipts/write-receipt';

export type DriveReceiptResult = {
  ok: boolean;
  target: 'drive';
  url?: string;
  status: number;
  error?: string;
};

export async function writeDriveReceipt(receipt: StrategicOSReceipt): Promise<DriveReceiptResult> {
  const webhookUrl = process.env.DRIVE_RECEIPT_WEBHOOK_URL || process.env.GOOGLE_WORKSPACE_CONNECTOR_REF;

  if (!webhookUrl || !webhookUrl.startsWith('https://')) {
    return {
      ok: false,
      target: 'drive',
      status: 0,
      error: 'drive_receipt_webhook_not_configured'
    };
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(process.env.DRIVE_RECEIPT_WEBHOOK_SECRET
        ? { authorization: `Bearer ${process.env.DRIVE_RECEIPT_WEBHOOK_SECRET}` }
        : {})
    },
    body: JSON.stringify({
      type: 'strategic_os_validation_receipt',
      receipt
    }),
    cache: 'no-store'
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'unknown_drive_receipt_error');
    return {
      ok: false,
      target: 'drive',
      status: response.status,
      error: errorText.slice(0, 500)
    };
  }

  const payload = (await response.json().catch(() => ({}))) as { url?: string; driveUrl?: string };

  return {
    ok: true,
    target: 'drive',
    status: response.status,
    url: payload.driveUrl || payload.url
  };
}
