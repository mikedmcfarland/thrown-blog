import '@testing-library/jest-dom'
import { AssetDoc } from 'src/org/AssetDoc'
import { OrgDoc } from 'src/org/OrgDoc'
import { isAssetDoc, isOrgDoc } from '../../src/org/types'

const mockAssetDoc: AssetDoc = JSON.parse(`{
  "$$data_type": "asset-document",
  "title": "Statements",
  "description": "Statements is a web application which helps a company of brokers to send a set of statements to their clients, via data received by external services.",
  "path": "/projects/statements",
  "category": "Proprietary",
  "date": "2015-08-14"
}`)

const mockOrgDoc: OrgDoc = JSON.parse(`{
  "$$data_type": "org-document",
  "properties": {
    "title": ["Test"],
    "filetags": [],
    "author": ["Michael McFarland"],
    "date": [],
    "description": [],
    "language": "en"
  },
  "contents": []
}`)

describe('doc type predicates', () => {
  it('isAssetDoc detects asset docs', () => {
    expect(isAssetDoc(mockAssetDoc)).toBe(true)
  })

  it('isAssetDoc fails org docs', () => {
    expect(isAssetDoc(mockOrgDoc)).toBe(false)
  })

  it('isOrgDoc fails asset docs', () => {
    expect(isOrgDoc(mockAssetDoc)).toBe(false)
  })

  it('isOrgDoc detects org docs', () => {
    expect(isOrgDoc(mockOrgDoc)).toBe(true)
  })
})
