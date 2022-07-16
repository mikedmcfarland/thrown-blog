import * as t from 'io-ts'
import { emptyArray } from './io'
import { NodeType } from './types'

export interface VerbatimBlockNode {
  ref: string
  type: NodeType.VERBATIM_BLOCK
  properties: {
    value: string
  }
  contents: []
}
const VerbatimBlockNodeIO: t.Type<VerbatimBlockNode> = t.recursion(
  'VerbatimBlockNode',
  () =>
    t.type({
      type: t.literal(NodeType.VERBATIM_BLOCK),
      ref: t.string,
      properties: t.type({
        value: t.string,
      }),
      contents: emptyArray,
    })
)

export default VerbatimBlockNodeIO
