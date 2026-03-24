import { SocialIcons } from "./icons"
import { Link } from "./link"

interface FooterProps {
    socials: string[]
    name: string
    domain: string
    yearFrom?: number
    iconSize?: number
}

export const Footer: React.FC<FooterProps> = ({
    socials,
    name,
    domain,
    yearFrom = 1990,
    iconSize = 23,
}) => {
    const year = new Date().getFullYear()
    return (
        <footer className="flex w-full flex-col items-center justify-center space-x-4 pb-4">
            <div className="text-sm">
                &copy;<span className="text-default-600">Copyright</span>&nbsp;
                {yearFrom}~{year}&nbsp;
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
