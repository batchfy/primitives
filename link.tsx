"use client"
import React from "react"

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    isExternal?: boolean
}

export function Link({ className, style, children, isExternal, ...props }: LinkProps): React.ReactElement {
    const mergedStyle = { fontSize: "inherit", ...style }
    return (
        <a
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={className}
            style={mergedStyle}
            {...props}
        >
            {children}
        </a>
    )
}
