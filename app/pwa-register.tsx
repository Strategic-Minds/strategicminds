'use client';

import { useEffect } from 'react';

export default function PWARegister() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      return;
    }

    const isLocalhost = window.location.hostname === 'localhost';
    const isSecure = window.location.protocol === 'https:';

    if (!isLocalhost && !isSecure) {
      return;
    }

    navigator.serviceWorker.register('/sw.js').catch(() => undefined);
  }, []);

  return null;
}
