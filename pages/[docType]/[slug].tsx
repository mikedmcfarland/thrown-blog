import { getAllDocs, getPostBySlug } from 'src/org/files'
import { getSummaryData } from 'src/org/metadata'
import { Post } from 'components/Post'
import Any from 'components/nodes/Any'
import { getDocTypes } from 'src/org/config'

type Props = Awaited<ReturnType<typeof getStaticProps>>['props']

export default function PostPage(props: Props) {
  const summary = getSummaryData(props.post)
  const postProps = {
    summary,
  }

  const content = props.post.contents.map((n, i) => (
    <Any key={i} node={n} i={i} />
  ))
  return <Post {...postProps}>{content}</Post>
}

type RouteParams = { params: { slug: string; docType: string } }

export async function getStaticProps(route: RouteParams) {
  return {
    props: {
      post: await getPostBySlug(route.params.slug, route.params.docType),
    },
  }
}

export async function getStaticPaths() {
  const docsByType = await Promise.all(getDocTypes().map(getAllDocs))
  const allDocTypes = docsByType.flatMap((d) => d)
  const paths = allDocTypes.map((doc) => ({
    params: {
      docType: doc.docType,
      slug: doc.name.replace('.json', ''),
    },
  }))

  return {
    fallback: false,
    paths,
  }
}
