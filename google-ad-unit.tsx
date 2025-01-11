'use client'
import React, { Fragment, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Script from 'next/script'


type Props = {
  slot: string
  client: string
  format?: "square" | "horizontal" | "vertical" | "auto"
}

declare global {
  interface Window {
    adsbygoogle?: any | any[]
  }
}

const GoogleAd = ({ slot, client, format="auto" }: Props) => {
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
      data-ad-format={format}
      data-full-width-responsive="true">
    </ins>
  </Fragment>
}

export const GoogleAdUnit = ({ slot, client, format }: Props) => {
    return <Suspense><GoogleAd slot={slot} client={client} format={format} /></Suspense>
}


export default GoogleAdUnit