import * as t from 'io-ts'
import { NodeType } from './types'

export interface BoldNode {
  type: NodeType.BOLD
  contents: string[]
}

const BoldNodeIO: t.Type<BoldNode> = t.recursion('BoldNode', () =>
  t.type({
    type: t.literal(NodeType.BOLD),
    contents: t.array(t.string),
  })
)

export default BoldNodeIO
