import * as React from 'react'
import { Link } from "@nextui-org/link"
import { Icon } from '@iconify/react'

interface SocialIconsProps {
    iconSize?: number,
    github?: string,
    gitlab?: string,
    orcid?: string,
    semanticscholar?: string,
    steam?: string,
    twitter?: string,
    googlescholar?: string,
    linkedin?: string,
}

export const SocialIcons: React.FC<SocialIconsProps> = ({
    iconSize=1,
    github=undefined,
    gitlab=undefined,
    orcid=undefined,
    semanticscholar=undefined,
    steam=undefined,
    twitter=undefined,
    googlescholar=undefined,
    linkedin=undefined,
}: SocialIconsProps) => {
    const icoCls = "inline text-default-600"
    return <div className="flex items-center">
        { !!googlescholar && <Link isExternal href={googlescholar} style={{"marginLeft": "2px", "marginRight": "2px"}}><Icon icon="academicons:google-scholar" height={iconSize * 20} width={iconSize * 20} className={icoCls} /></Link> }
        { !!semanticscholar && <Link isExternal href={semanticscholar} style={{"marginLeft": "2px", "marginRight": "2px"}}><Icon icon="simple-icons:semanticscholar" height={iconSize * 20} width={iconSize * 20} className={icoCls} /></Link> }
        { !!orcid && <Link isExternal href={orcid} style={{"marginLeft": "2px", "marginRight": "2px"}}><Icon icon="la:orcid" height={iconSize * 20} width={iconSize * 20} className={icoCls} /></Link> }
        { !!gitlab && <Link isExternal href={gitlab} style={{"marginLeft": "2px", "marginRight": "2px"}}><Icon icon="la:gitlab" height={iconSize * 20} width={iconSize * 20} className={icoCls} /></Link> }
        { !!github && <Link isExternal href={github} style={{"marginLeft": "2px", "marginRight": "2px"}}><Icon icon="mdi:github" height={iconSize * 20} width={iconSize * 20} className={icoCls} /></Link> }
        { !!steam && <Link isExternal href={steam} style={{"marginLeft": "2px", "marginRight": "2px"}}><Icon icon="mdi:steam" height={iconSize * 20} width={iconSize * 20} className={icoCls} /></Link> }
        { !!twitter && <Link isExternal href={twitter} style={{"marginLeft": "2px", "marginRight": "2px"}}><Icon icon="prime:twitter" height={iconSize * 16} width={iconSize * 16} className={icoCls} /></Link> }
        { !!linkedin && <Link isExternal href={linkedin} style={{"marginLeft": "2px", "marginRight": "2px"}}><Icon icon="mdi:linkedin" height={iconSize * 20} width={iconSize * 20} className={icoCls} /></Link> }
    </div>
}