import { NodeType } from './types'
import * as t from 'io-ts'
import { emptyArray } from './io'

const KeywordNodeIO = t.type({
  type: t.literal(NodeType.KEYWORD),
  properties: t.type({
    key: t.string,
    value: t.string,
  }),
  contents: emptyArray,
})

export type KeywordNode = t.TypeOf<typeof KeywordNodeIO>

export default KeywordNodeIO
