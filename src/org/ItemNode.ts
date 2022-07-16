import * as t from 'io-ts'
import ContentNodeIO, { ContentNode } from './ContentNode'
import { NodeType } from './types'

export interface ItemNode {
  type: NodeType.ITEM
  ref: string
  contents: ContentNode[]
}
const ItemNodeIO: t.Type<ItemNode> = t.recursion('ItemNode', () =>
  t.type({
    type: t.literal(NodeType.ITEM),
    ref: t.string,
    contents: t.array(ContentNodeIO),
  })
)

export default ItemNodeIO
