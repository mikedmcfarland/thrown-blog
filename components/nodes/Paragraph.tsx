import { Text } from '@chakra-ui/react'
import { AnyNode, OrgDoc, ParagraphNode } from 'src/org/types'

type Props = { node: ParagraphNode; renderFn: RenderFn }
type RenderFn = (n: Exclude<AnyNode, OrgDoc>, i: number) => JSX.Element
type Content = ParagraphNode['contents'][number]
export function Paragraph({ renderFn, node }: Props) {
  /* const textElements = Array.isArray(children) ? interleave(children, " ") : children */
  const textElements = handlePostBlank(node.contents, renderFn)

  return <Text>{textElements}</Text>
}

type TextElement = string | JSX.Element
function handlePostBlank(list: Content[], renderFn: RenderFn): TextElement[] {
  return list.reduce((l, a, i) => {
    if (typeof a === 'string') {
      return l.concat([a])
    } else if (hasPostBlank(a)) {
      return l.concat([renderFn(a, i), ' '])
    } else {
      return l.concat([renderFn(a, i)])
    }
  }, [] as TextElement[])
}

function hasPostBlank(node: Exclude<AnyNode, OrgDoc>): boolean {
  return (node as any)['properties']['post-blank'] === 1
}
