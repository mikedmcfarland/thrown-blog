import { getAllPosts } from "src/org/files"
import { Grid } from "@chakra-ui/layout"
import { PostSummary } from 'components/PostSummary'
import { getSummaryData } from "src/org/metadata"
import { Container, SimpleGrid } from "@chakra-ui/react"

type Props = Awaited<ReturnType<typeof getStaticProps>>["props"]

export default function Posts(props: Props) {
    return (
        <Container maxWidth="7xl">
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
                {props.posts.map(({ name, post }, i) => {
                    const summaryProps = getSummaryData(post)
                    const href = `posts/${name}`
                    return (<PostSummary href={href} key={i} {...summaryProps} />)
                })}
            </SimpleGrid>
        </Container>
    )
}

export async function getStaticProps() {
    return {
        props: {
            posts: await getAllPosts()
        }
    }
}
