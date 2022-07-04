import { getAllPosts } from "src/org/files"
import { Grid } from "@chakra-ui/layout"
import { PostSummary } from 'components/PostSummary'
import { getSummaryData } from "src/org/metadata"

type Props = Awaited<ReturnType<typeof getStaticProps>>["props"]

export default function Posts(props: Props) {
    return (
        <Grid gridColumn={[1, 2]}>
            {props.posts.map((post, i) => {
                const summaryProps = getSummaryData(post)
                return (<PostSummary key={i} {...summaryProps} />)
            })}
        </Grid>
    )
}

export async function getStaticProps() {
    const allPosts = await getAllPosts()
    console.log("allPosts", allPosts)
    const posts = allPosts.map(({ name, post }) => post)
    return {
        props: {
            posts
        }
    }
}
