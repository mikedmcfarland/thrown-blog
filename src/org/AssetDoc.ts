import * as t from 'io-ts'
import { DataType, DATA_TYPE_KEY } from './types'

const AssetDocIO = t.type({
  [DATA_TYPE_KEY]: t.literal(DataType.ASSET),
  title: t.string,
  description: t.string,
  path: t.string,
  category: t.string,
  date: t.string,
  tags: t.array(t.string),
})

export type AssetDoc = t.TypeOf<typeof AssetDocIO>
export default AssetDocIO
