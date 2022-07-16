import * as t from 'io-ts'
import { emptyArray } from './io'
import { NodeType } from './types'

export interface SourceBlockNode {
  type: NodeType.SRC_BLOCK
  ref: string
  properties: {
    language: string
    value: string
  }
  contents: []
}
const SourceBlockNodeIO: t.Type<SourceBlockNode> = t.recursion(
  'SourceBlockNode',
  () =>
    t.type({
      type: t.literal(NodeType.SRC_BLOCK),
      ref: t.string,
      properties: t.type({
        language: t.string,
        value: t.string,
      }),
      contents: emptyArray,
    })
)

export default SourceBlockNodeIO
