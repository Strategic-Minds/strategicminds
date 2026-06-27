import './globals.css';

export const metadata = {
  title: 'Strategic Minds Advisory',
  description: 'Vercel-built websites, client portals, and automation systems for service businesses.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
