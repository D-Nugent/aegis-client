import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
// import dynamic from 'next/dynamic';
import '../styles/globals.scss';
// import { useState } from 'react';

// const dynamicTheme = dynamic(() => import('../styles/theme'), { ssr: false });

function MyApp({Component, pageProps}: AppProps) {
  // const [theme, setTheme] = useState('light');
  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // }
  return (
    // ContextProviders e.g. QueryClientProvider, Identity Services, MessageProviders, Redux?
    // Layouts - e.g. Shared Layouts like navigation bars
    // TODO: Consider utilizing  NextJS rewrites whenever you are using uuid's as a route param
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp