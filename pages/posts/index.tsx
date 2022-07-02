import { getAllPosts } from "src/org/files"
import { OrgDoc } from "src/org/types"
import { Grid } from "@chakra-ui/layout"
import { PostSummary } from 'components/PostSummary'

interface Props { posts: OrgDoc[] }

export default function Posts(props: Props) {
    return (
        <Grid gridColumn={[1, 2]}>
            {props.posts.map((post) => (
                <PostSummary
                    category={"Tech"}
                    title={post.properties.title}
                    authorName={'Michael McFarland'}
                    authorAvatarImageUrl={'https://placekitten.com/200/300'}
                    heroImage={'https://placekitten.com/500/400'}
                    summaryText={""}
                    date={'Friday, July 1, 2022'} />
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
