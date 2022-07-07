import { getAllDocs, getPostBySlug } from "src/org/files"
import { getSummaryData } from "src/org/metadata"
import { Post } from 'components/Post'
import Any from "components/nodes/Any";

type Props = Awaited<ReturnType<typeof getStaticProps>>["props"]

export default function PostPage(props: Props) {
    const summary = getSummaryData(props.post)
    const postProps = {
        summary
    }

    const content = props.post.contents.map((n, i) => (<Any node={n} i={i} />))
    return (
        <Post {...postProps} >
            {content}
        </Post>
    )
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
    const posts = await getAllDocs()
    return {
        fallback: false,
        paths: posts.map(post => ({
            params: {
                slug: post.name.replace(".json", "")
            }
        }))
    }
}
