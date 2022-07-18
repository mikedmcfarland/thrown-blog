import '@testing-library/jest-dom'
import { getAllDocs, getDir, getDocBySlug } from 'src/org/files'

describe('getDir', () => {
  it('returns base directories when no filename present', () => {
    expect(getDir('pages')).toBe('_pages')
  })

  it('returns full doc path when filename is present', () => {
    expect(getDir('pages', 'test')).toBe('_pages/test')
  })
})

describe('getDocBySlug', () => {
  it('returns result for about page (does not throw)', async () => {
    await expect(getDocBySlug('pages', 'about')).resolves.toMatchObject({})
  })
})

describe('getAllDocs', () => {
  it('returns docs for pages', async () => {
    await expect(getAllDocs('pages')).resolves.toEqual(
      expect.arrayContaining([expect.objectContaining({})])
    )
  })
})
