'use client'
import React, { Fragment, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Script from 'next/script'


type Props = {
  slot: string
  client: string
}

declare global {
  interface Window {
    adsbygoogle?: any | any[]
  }
}

const GoogleAd = ({ slot, client }: Props) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error(err)
    }
  }, [pathname, searchParams])
  return <Fragment>
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      strategy="lazyOnload"
      crossOrigin="anonymous"
    />
    <ins className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  </Fragment>
}

export const GoogleAdUnit = ({ slot, client }: Props) => {
    return <Suspense><GoogleAd slot={slot} client={client} /></Suspense>
}


export default GoogleAdUnit