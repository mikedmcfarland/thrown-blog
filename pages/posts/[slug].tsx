import { getAllPosts, getPostBySlug } from "src/org/files"
import { getSummaryData } from "src/org/metadata"
import { Post } from 'components/Post'
import { AnyNode, NodeType, OrgDoc } from "src/org/types"

import { Headline } from "components/nodes/Headline";
import { Item } from "components/nodes/Item";
import { Keyword } from "components/nodes/Keyword";
import { PlainList } from "components/nodes/PlainList";
import { Section } from "components/nodes/Section";
import { SrcBlock } from "components/nodes/SrcBlock";
import { Verbatim } from "components/nodes/Verbatim";
import { Paragraph } from "components/nodes/Paragraph";
import { Unknown } from "components/nodes/Unknown";

type Props = Awaited<ReturnType<typeof getStaticProps>>["props"]

export default function PostPage(props: Props) {

    const postProps = {
        summary: getSummaryData(props.post),
    }

    const content = props.post.contents.map(renderComponent)
    return (
        <Post {...postProps} >
            {content}
        </Post>
    )
}


function renderComponent(node: Exclude<AnyNode, OrgDoc>, i: number): JSX.Element {
    const key = `${node.ref}:${i}`
    const id = node.ref
    const props = { key, id }

    switch (node.type) {
        case NodeType.HEADLINE:
            return (
                <Headline {...props} node={node}>
                    {node.contents.map(renderComponent)}
                </Headline>
            )
        case NodeType.ITEM:
            return (
                <Item {...props} node={node}>
                    {node.contents.map(renderComponent)}
                </Item>
            )
        case NodeType.KEYWORD:
            return (
                <Keyword {...props} node={node} />
            )
        case NodeType.PARAGRAPH:
            return (
                <Paragraph {...props}>
                    {
                        node.contents.map((c, i) => {
                            if (typeof c === 'string') {
                                return c
                            }
                            else {
                                return renderComponent(c, i)
                            }
                        })
                    }

                </Paragraph>
            )
        case NodeType.PLAIN_LIST:
            return (
                <PlainList {...props} node={node} >
                    {node.contents.map(renderComponent)}
                </PlainList>
            )
        case NodeType.SECTION:
            return (
                <Section {...props} node={node} >
                    {node.contents.map(renderComponent)}
                </Section>
            )
        case NodeType.SRC_BLOCK:
            return (
                <SrcBlock {...props} node={node} />
            )

        case NodeType.VERBATIM:
            console.log("verbatim?")
            return (
                <Verbatim {...props} node={node} />
            )
        default:
            return (
                <Unknown {...props} node={node} />
            )

    }

}

type RouteParams = { params: { slug: string } }

export async function getStaticProps(route: RouteParams) {
    return {
        props: {
            post: await getPostBySlug(route.params.slug)
        }
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts()
    return {
        fallback: false,
        paths: posts.map(post => ({
            params: {
                slug: post.name.replace(".json", "")
            }
        }))
    }
}
