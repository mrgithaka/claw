import { gantari } from '@fonts/variable';
import '../styles/global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      data-theme='system'
    >
      <body className={gantari.className}>{children}</body>
    </html>
  );
}
