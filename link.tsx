"use client"
import {Link as NextUILink, LinkProps} from "@nextui-org/link"
import React from "react"
import { sendGTMEvent } from '@next/third-parties/google'


export function Link(props: LinkProps): React.ReactElement {
    const mergedStyle = { fontSize: "inherit!important", ...props.style }
    return <NextUILink
        className={props.className}
        style={mergedStyle}
        onPress={() => { sendGTMEvent({ event: 'linkClicked', href: props.href }) }}
        href={ props.href }
    >
        { props.children }
    </NextUILink>
}