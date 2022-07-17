import * as t from 'io-ts'
import ContentNodeIO, { ContentNode } from './ContentNode'
import { DataType, DATA_TYPE_KEY } from './types'

export interface OrgDoc {
  [DATA_TYPE_KEY]: DataType.ORG_DOCUMENT
  properties: {
    title: string[]
    filetags: string[]
  }
  contents: ContentNode[]
}

const OrgDocIO = t.type({
  [DATA_TYPE_KEY]: t.literal(DataType.ORG_DOCUMENT),
  properties: t.type({
    title: t.array(t.string),
    filetags: t.array(t.string),
  }),
  contents: t.array(ContentNodeIO),
})

export default OrgDocIO
