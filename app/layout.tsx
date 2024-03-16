import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './globals.css';
import '../styles/globals.scss';
import './input.css';
import '../public/assets/css/icons.css';
import { globalConfig } from '@/config/globalConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: globalConfig.name,
  description: globalConfig.description,
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
        {children}
      </body>
    </html>
  );
}
