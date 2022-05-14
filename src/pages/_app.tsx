import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../styles/createEmotionCache'

import '../styles/app.css'
import faviconUrl from '../assets/images/favicon.ico?url&ts-ignore'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}
export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href={faviconUrl} type="image/x-icon" />
        <link rel="icon" href={faviconUrl} type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </CacheProvider>
  )
}
