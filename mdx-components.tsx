import type { MDXComponents } from 'mdx/types'
import { Link, LinkProps } from "@nextui-org/link";

 
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