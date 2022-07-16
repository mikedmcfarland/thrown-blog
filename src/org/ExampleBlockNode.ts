import * as t from 'io-ts'
import { emptyArray } from './io'
import { NodeType } from './types'

export interface ExampleBlockNode {
  ref: string
  type: NodeType.EXAMPLE_BLOCK
  properties: {
    value: string
  }
  contents: []
}
const ExampleBlockNodeIO: t.Type<ExampleBlockNode> = t.recursion(
  'ExampleBlockNode',
  () =>
    t.type({
      type: t.literal(NodeType.EXAMPLE_BLOCK),
      ref: t.string,
      properties: t.type({
        value: t.string,
      }),
      contents: emptyArray,
    })
)

export default ExampleBlockNodeIO
