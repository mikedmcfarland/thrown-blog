import * as t from 'io-ts'
import AssetDocIO from './AssetDoc'
import OrgDocIO from './OrgDoc'
const DocIO = t.union([AssetDocIO, OrgDocIO])
export type DOC = t.TypeOf<typeof DocIO>
export default DocIO
