import * as t from 'io-ts'
import ItemNodeIO, { ItemNode } from './ItemNode'
import { NodeType } from './types'

export interface PlainListNode {
  type: NodeType.PLAIN_LIST
  ref: string
  contents: ItemNode[]
}
const PlainListNodeIO: t.Type<PlainListNode> = t.recursion(
  'PlainListNode',
  () =>
    t.type({
      type: t.literal(NodeType.PLAIN_LIST),
      ref: t.string,
      contents: t.array(ItemNodeIO),
    })
)

export default PlainListNodeIO
