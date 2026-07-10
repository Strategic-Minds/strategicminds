import './globals.css';

export const metadata = {
  title: 'Strategic Minds Advisory',
  description: 'Clean advisory website and client dashboard preview.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'Strategic Minds',
    statusBarStyle: 'black-translucent'
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-touch-icon.svg'
  }
};

export const viewport = {
  themeColor: '#0a0a0a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function () {
                  navigator.serviceWorker.register('/sw.js').catch(function () {});
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}
