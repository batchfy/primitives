"use client"

import { DiscussionEmbed, CommentCount, Recommendations } from "disqus-react"

const DisqusComments = ({ domain = "batchfy.com", id, slug }: { domain?: string; id: string; slug: string }) => {
    const disqusShortname = "batchfy"
    const disqusConfig = {
        url: `https://${domain}/${slug}`,
        identifier: id,
    }

    return (
        <div>
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
