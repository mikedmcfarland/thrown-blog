import { AssetDoc } from './AssetDoc'
import { OrgDoc } from './OrgDoc'

export const DATA_TYPE_KEY = '$$data_type'

export type Doc = AssetDoc | OrgDoc

export function isOrgDoc(doc: Doc): doc is OrgDoc {
  return doc[DATA_TYPE_KEY] === DataType.ORG_DOCUMENT
}
export function isAssetDoc(doc: Doc): doc is AssetDoc {
  return doc[DATA_TYPE_KEY] === DataType.ASSET
}

export enum DataType {
  ASSET = 'asset-document',
  ORG_NODE = 'org-node',
  ORG_DOCUMENT = 'org-document',
}

export enum NodeType {
  SECTION = 'section',
  KEYWORD = 'keyword',
  PARAGRAPH = 'paragraph',
  HEADLINE = 'headline',
  ITEM = 'item',
  PLAIN_LIST = 'plain-list',
  VERBATIM_BLOCK = 'verbatim',
  SRC_BLOCK = 'src-block',
  LINK = 'link',
  BOLD = 'bold',
  ITALIC = 'italic',
  EXAMPLE_BLOCK = 'example-block',
}
