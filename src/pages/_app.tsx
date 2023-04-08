import Layout from '@/components/layout';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps, session }: any) {
  return (
    <SessionProvider session={session}>
      <Layout className={inter.className}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
