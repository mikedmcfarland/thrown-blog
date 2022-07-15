import { getAllDocs, getDocBySlug } from 'src/org/files'
import { getOrgSummaryData } from 'src/org/metadata'
import { Post } from 'components/Post'
import Any from 'components/nodes/Any'
import { getDocTypes } from 'src/org/config'
import { isOrgDoc } from 'src/org/types'

type Props = Awaited<ReturnType<typeof getStaticProps>>['props']

export default function PostPage(props: Props) {
  if (!isOrgDoc(props.doc)) {
    throw new Error('Post Page expects org doc')
  }
  const summary = getOrgSummaryData(props.doc)
  const postProps = {
    summary,
  }

  const content = props.doc.contents.map((n, i) => (
    <Any key={i} node={n} i={i} />
  ))
  return <Post {...postProps}>{content}</Post>
}

type RouteParams = { params: { slug: string; docType: string } }

export async function getStaticProps(route: RouteParams) {
  const doc = await getDocBySlug(route.params.slug, route.params.docType)
  return {
    props: {
      doc,
    },
  }
}

export async function getStaticPaths() {
  const docsByType = await Promise.all(getDocTypes().map(getAllDocs))
  const allDocTypes = docsByType
    .flatMap((d) => d)
    .filter(({ doc }) => isOrgDoc(doc))

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
