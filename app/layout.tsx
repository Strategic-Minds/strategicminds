import './globals.css';

export const metadata = {
  title: 'Strategic Minds Advisory',
  description: 'Client operating system powered by AUTO_BUILDER.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
