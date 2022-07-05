import { getAllPosts } from "src/org/files"
import { Grid } from "@chakra-ui/layout"
import { PostSummary } from 'components/PostSummary'
import { getSummaryData } from "src/org/metadata"

type Props = Awaited<ReturnType<typeof getStaticProps>>["props"]

export default function Posts(props: Props) {
    return (
        <Grid gridColumn={[1, 2]}>
            {props.posts.map(({ name, post }, i) => {
                const summaryProps = getSummaryData(post)
                const href = `posts/${name}`
                return (<PostSummary href={href} key={i} {...summaryProps} />)
            })}
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
