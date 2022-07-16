import * as t from 'io-ts'
import { NodeType } from './types'

const IS_INTERNAL_KEY = 'is-internal'

export interface LinkNode {
  ref: string
  type: NodeType.LINK
  contents: string[]
  properties: {
    type: string
    path: string
    [IS_INTERNAL_KEY]: boolean
  }
}
const LinkNodeIO: t.Type<LinkNode> = t.recursion('LinkNode', () =>
  t.type({
    type: t.literal(NodeType.LINK),
    ref: t.string,
    contents: t.array(t.string),
    properties: t.type({
      type: t.string,
      path: t.string,
      [IS_INTERNAL_KEY]: t.boolean,
    }),
  })
)

export default LinkNodeIO
