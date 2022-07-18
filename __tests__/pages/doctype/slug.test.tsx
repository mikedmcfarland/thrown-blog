import '@testing-library/jest-dom'
import { getStaticPaths, getStaticProps } from '../../../pages/[docType]'

describe('getStaticPaths', () => {
  it('should return some values', () => {
    const paths = getStaticPaths()
    expect(paths.paths).toEqual(
      expect.arrayContaining([expect.objectContaining({})])
    )
  })
})

describe('getStaticProps', () => {
  it('should return some values', async () => {
    const route = { params: { docType: 'pages' } }
    const props = await getStaticProps(route)
    expect(props).toMatchObject({})
  })
})
