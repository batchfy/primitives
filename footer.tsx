import { SocialIcons } from "./icons";
import { Link } from "./link"

interface FooterProps {
    socials: string[],
    name: string,
    domain: string
    iconSize?: number
}

export const Footer: React.FC<FooterProps> = ({ socials, name, domain, iconSize=23 }) => {
    const year = new Date().getFullYear();
    return(
        <footer className="w-full flex flex-col items-center justify-center space-x-4 pb-4">
            <div className="text-sm">
                &copy;<span className="text-default-600">Copyright</span>&nbsp;2010~{year}&nbsp;
                <Link
                    isExternal
                    className="text-current"
                    href={`https://${domain}`}
                >
                    <span className="text-primary text-sm">{name}</span>
                </Link>
                <SocialIcons links={socials} iconSize={iconSize} mx={2} />
            </div>
        </footer>
    )
}