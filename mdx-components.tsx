import type { MDXComponents } from 'mdx/types'
import { LinkProps } from "@heroui/link";
import { Link } from "./link";

 
export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        a: (props) => (
            <Link {...(props as LinkProps)}>
                {props.children}
            </Link>
        ),
        ...components,
    }
}