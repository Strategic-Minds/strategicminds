import type { Metadata, Viewport } from 'next';
import PWARegister from './pwa-register';
import './globals.css';

export const metadata: Metadata = {
  title: 'Strategic Minds Advisory',
  description: 'High-converting websites, client dashboards, and automation systems for service businesses.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Strategic Minds'
  },
  icons: {
    icon: [
      { url: '/icons/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
      { url: '/icons/icon-512.svg', sizes: '512x512', type: 'image/svg+xml' }
    ],
    apple: '/icons/icon-192.svg'
  }
};

export const viewport: Viewport = {
  themeColor: '#02040a',
  colorScheme: 'dark'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
