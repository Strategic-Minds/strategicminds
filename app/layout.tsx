import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Strategic Minds Advisory',
  description: 'Client operating system powered by AUTO_BUILDER.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
