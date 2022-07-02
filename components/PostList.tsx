import { getAllPosts } from "src/org/files"
import { PostSummary, Props as SummaryProps } from "components/PostSummary"
import { Grid } from "@chakra-ui/layout"

export interface Props { posts: SummaryProps[] }

export function PostList(props: Props) {
    return (
        <Grid gridColumn={[1, 2]}>
            {props.posts.map((p) => (
                <PostSummary {...p} />
            ))}
        </Grid>
    )
}

export async function getStaticProps() {
    return {
        props: {
            posts: await getAllPosts()
        }
    }
}
