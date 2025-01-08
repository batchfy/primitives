'use client'
import React, { Fragment, ReactNode, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

type Props = {
  slot: string
  client: string
}

declare global {
  interface Window {
    adsbygoogle?: any | any[]
  }
}

export const GoogleAdUnit = ({ slot, client }: Props) => {
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
    <ins className="adsbygoogle"
     style={{ display: "block" }}
     data-ad-client={{ client }}
     data-ad-slot={{ slot }}
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  </Fragment>
}


export default GoogleAdUnit