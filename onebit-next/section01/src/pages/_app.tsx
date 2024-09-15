import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import GlobalLayout from '@/components/global-layout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const onClickButton = () => {
    router.push('/')
  }

  useEffect(() => {
    router.prefetch("/test")
  }, []);

  return <>
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  </>
}
