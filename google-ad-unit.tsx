"use client"
import React, { Fragment, useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { Suspense } from "react"

type Props = {
    slot: string
    client: string
    layout?: undefined | "in-article" | "in-feed" | "display"
    format?: "square" | "horizontal" | "vertical" | "auto" | "fluid"
}

declare global {
    interface Window {
        adsbygoogle?: any | any[]
    }
}

const GoogleAd = ({ slot, client, layout, format = "auto" }: Props) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const insRef = useRef<HTMLModElement | null>(null)
    useEffect(() => {
        const ins = insRef.current
        if (!ins) return
        if (ins.dataset.loaded === "true") return
        ins.dataset.loaded = "true"

        try {
            ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (e) {
            console.error(e)
        }
    }, [])
    return (
        <Fragment>
            <ins
                ref={insRef}
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-layout={layout}
                data-ad-client={client}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"
            ></ins>
        </Fragment>
    )
}

export const GoogleAdUnit = ({ slot, client, format, layout }: Props) => {
    return (
        <Suspense>
            <GoogleAd
                slot={slot}
                client={client}
                format={format}
                layout={layout}
            />
        </Suspense>
    )
}

export default GoogleAdUnit
