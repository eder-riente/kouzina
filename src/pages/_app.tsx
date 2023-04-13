import Layout from '@/components/layout';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Layout className={inter.className}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
