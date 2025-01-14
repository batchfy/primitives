import * as React from 'react'
import { Link } from "./link"
import { Icon as IconifyIcon } from '@iconify/react'


const platformIconMap: { [key: string]: string } = {
    "github.com": "mdi:github",
    "gitlab.com": "la:gitlab",
    "linkedin.com": "mdi:linkedin",
    "orcid.org": "la:orcid",
    "reddit.com": "ph:reddit-logo-fill",
    "scholar.google.com": "academicons:google-scholar",
    "semanticscholar.org": "simple-icons:semanticscholar",
    "steamcommunity.com": "mdi:steam",
    "twitter.com": "mdi:twitter",
    "x.com": "prime:twitter",
};


export const Icon: React.FC<{platform: string, size?: number, className: string }> = ({ platform, className, size=20}) => {
    const iconName = platformIconMap[platform];
    return iconName ? <IconifyIcon icon={iconName} height={size} width={size} className={className} /> : null;
}


export const SocialIcons: React.FC<{ links: string[], iconSize?: number }> = ({ links, iconSize=20 }) => {
    const icoCls = "inline text-default-600";

    const iconSizeScale: { [key: string]: number } = {
        "x.com": 0.72,
    }

    const getPlatformName = (url: string) => {
        try {
            const hostname = new URL(url).hostname;
            return hostname.replace('www.', '');
        } catch (error) {
            console.error(`Could not get social platform from URL: ${url}.`);
            return null;
        }
    };

    return (
        <div className="flex items-center justify-center mt-1">
            {links.map((link, index) => {
                const platformName = getPlatformName(link);
                const size = platformName && platformName in iconSizeScale ? iconSize * iconSizeScale[platformName] : iconSize;
                return platformName ? (
                    <Link key={index} isExternal href={link} style={{ marginLeft: "2px", marginRight: "2px" }}>
                        <Icon platform={platformName} size={size} className={icoCls} />
                    </Link>
                ) : null;
            })}
        </div>
    );
};
