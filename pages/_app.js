import '@/css/prism.css'
import '@/css/tailwind.css'
import '@fontsource/inter/variable-full.css'
import 'katex/dist/katex.css'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
            <ToastContainer />
        </ThemeProvider>
    )
}
