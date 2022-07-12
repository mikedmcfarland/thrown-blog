import { getAllDocs } from "src/org/files"
import { PostSummary } from 'components/PostSummary'
import { getMetaData } from "src/org/metadata"
import { Container, SimpleGrid } from "@chakra-ui/react"
import { getDocTypes } from "src/org/config"
import { isOrgDoc } from "src/org/types"

type Props = Awaited<ReturnType<typeof getStaticProps>>["props"]

export default function Posts(props: Props) {
    return (
        <Container maxWidth="7xl">
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
                {props.posts.map(({ name, doc, docType }, i) => {
                    if (isOrgDoc(doc)) {
                        const summaryProps = getMetaData(doc)
                        const href = `${docType}/${name}`
                        return (<PostSummary href={href} key={i} {...summaryProps} />)
                    }
                    else {
                        return (<PostSummary href={doc.path} key={i} {...doc} />)
                    }
                })}
            </SimpleGrid>
        </Container>
    )
}

type RouteParams = { params: { docType: string } }

export async function getStaticProps(route: RouteParams) {
    return {
        props: {
            posts: await getAllDocs(route.params.docType)
        }
    }
}


export function getStaticPaths() {
    const paths = getDocTypes().map(docType => ({
        params: {
            docType
        }
    }))

    return {
        fallback: false,
        paths
    }
}
