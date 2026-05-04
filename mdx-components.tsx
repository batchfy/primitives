import type { MDXComponents } from "mdx/types"
import React from "react"

import { Link, LinkProps } from "./link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        a: (props: React.ComponentPropsWithoutRef<"a">) => (
            <Link
                {...(props as LinkProps)}
                isExternal={props.href?.startsWith("http") ?? false}
            >
                {props.children}
            </Link>
        ),
        ...components,
    }
}
