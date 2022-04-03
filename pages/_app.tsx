import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import '../styles/globals.scss';


function MyApp({Component, pageProps}: AppProps) {
  return (
    // ContextProviders e.g. QueryClientProvider, Identity Services, MessageProviders, Redux?
    // Layouts - e.g. Shared Layouts like navigation bars
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp