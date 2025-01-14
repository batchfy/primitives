"use client"
import {Link as NextUILink, LinkProps} from "@nextui-org/link"
import React from "react"
import { sendGTMEvent } from '@next/third-parties/google'


export function Link(props: LinkProps): React.ReactElement {
    return <NextUILink
        style={{ fontSize: "inherit!important" }}
        onPress={() => {
            sendGTMEvent({ event: 'linkClicked', href: props["href"] })
            console.log(`Link to ${props["href"]} clicked.`)
        }}
        href={ props["href"] }
    >
        { props["children"] }
    </NextUILink>
}