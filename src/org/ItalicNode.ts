import * as t from 'io-ts'
import { NodeType } from './types'

export interface ItalicNode {
  type: NodeType.ITALIC
  contents: string[]
}

const ItalicNodeIO: t.Type<ItalicNode> = t.recursion('ItalicNode', () =>
  t.type({
    type: t.literal(NodeType.ITALIC),
    contents: t.array(t.string),
  })
)

export default ItalicNodeIO
