import '@/css/prism.css'
import '@/css/tailwind.css'
import '@fontsource/inter/variable-full.css'

import siteMetadata from '@/data/siteMetadata'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? Fragment

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ThemeProvider>
  )
}
