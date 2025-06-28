"use client"

import { DiscussionEmbed, CommentCount, Recommendations } from "disqus-react"
import { Divider } from "@heroui/divider"

const DisqusComments = ({ domain = "batchfy.com", id, slug }: { domain?: string; id: string; slug: string }) => {
    const disqusShortname = "batchfy"
    const disqusConfig = {
        url: `https://${domain}/${slug}`,
        identifier: id,
    }

    return (
        <div>
            <Divider className="my-4" orientation="horizontal" />
            <DiscussionEmbed config={disqusConfig} shortname={disqusShortname} />
            <CommentCount config={{ url: `https://${domain}/${slug}`, identifier: id }} shortname="example" />
            <Recommendations
                config={{ url: `https://${domain}/${slug}`, identifier: id }}
                shortname={disqusShortname}
            />
        </div>
    )
}

export default DisqusComments
