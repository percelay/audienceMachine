import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'James Percelay | Earned Media Innovator',
  description: 'Engineering content that earns attention and drives real results for your brand.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
