import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '../styles/globals.scss';
import '../public/assets/css/icons.css';
import Provider from './provider/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rx Country',
  description: 'pendiente',
  icons: {
    icon: './favicon.ico', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={inter.className} style={{ margin: 0 }}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
