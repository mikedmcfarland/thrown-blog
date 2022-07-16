import * as t from 'io-ts'
import ContentNodeIO, { ContentNode } from './ContentNode'
import { NodeType } from './types'

export interface SectionNode {
  type: NodeType.SECTION
  ref: string
  contents: ContentNode[]
}
const SectionNodeIO: t.Type<SectionNode> = t.recursion('SectionNode', () =>
  t.type({
    type: t.literal(NodeType.SECTION),
    ref: t.string,
    contents: t.array(ContentNodeIO),
  })
)

export default SectionNodeIO
