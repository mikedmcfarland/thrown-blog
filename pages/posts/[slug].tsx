import { getAllPosts, getPostBySlug } from "src/org/files"
import { getSummaryData } from "src/org/metadata"
import { Post } from 'components/Post'

type Props = Awaited<ReturnType<typeof getStaticProps>>["props"]

export default function PostPage(props: Props) {

    const postProps = {
        summary: getSummaryData(props.post),
    }

    return (
        <Post {...postProps} >
            {<div>"hello world"</div>}
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
