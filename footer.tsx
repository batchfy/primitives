import { SocialIcons } from "./icons";
import { Link } from "@nextui-org/link"

interface FooterProps {
    socials: string[],
    name: string,
    title?: string,
    domain: string
    iconSize?: number
}

export const Footer: React.FC<FooterProps> = ({ socials, name, title="", domain, iconSize=23 }) => {
    const year = new Date().getFullYear();
    return(
        <footer className="w-full flex flex-col items-center justify-center space-x-4 py-3">
            <div className="text-sm">
                &copy;<span className="text-default-600">Copyright</span>&nbsp;2010~{year}&nbsp;
                <Link
                    isExternal
                    className="text-current"
                    href={`https://${domain}`}
                    title={title}
                >
                    <span className="text-primary text-sm">{name}</span>
                </Link>
                <SocialIcons links={socials} iconSize={iconSize} />
            </div>
        </footer>
    )
}