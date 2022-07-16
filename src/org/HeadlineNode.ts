import * as t from 'io-ts'
import ContentNodeIO, { ContentNode } from './ContentNode'
import { NodeType } from './types'

export interface HeadlineNode {
  type: NodeType.HEADLINE
  ref: string
  properties: {
    title: string[]
    'raw-value': string
    level: number
  }
  contents: ContentNode[]
}
const HeadlineNodeIO: t.Type<HeadlineNode> = t.recursion('HeadlineNode', () =>
  t.type({
    type: t.literal(NodeType.HEADLINE),
    ref: t.string,
    properties: t.type({
      title: t.array(t.string),
      'raw-value': t.string,
      level: t.number,
    }),
    contents: t.array(ContentNodeIO),
  })
)

export default HeadlineNodeIO
