import * as t from 'io-ts'
import ContentNodeIO, { ContentNode } from './ContentNode'
import { NodeType } from './types'

export interface ParagraphNode {
  type: NodeType.PARAGRAPH
  ref: string
  contents: (string | ContentNode)[]
}

const ParagraphNodeIO: t.Type<ParagraphNode> = t.recursion(
  'ParagraphNode',
  () =>
    t.type({
      type: t.literal(NodeType.PARAGRAPH),
      ref: t.string,
      contents: t.array(t.union([t.string, ContentNodeIO])),
    })
)

export default ParagraphNodeIO
