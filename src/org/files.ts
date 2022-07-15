import fs from 'fs'
import path from 'path'
import { DATA_TYPE_KEY, Doc } from 'src/org/types'

const EXT = '.json'
const ENCODING = 'utf8'

export async function getAllDocs(docType: string) {
  const files = await fs.promises.readdir(
    path.join(process.cwd(), getDir(docType))
  )
  const jsonFiles = files.filter((f) => path.extname(f).toLowerCase() === EXT)
  const docs = await Promise.all(
    jsonFiles.map((name) =>
      getDocByName(name, docType).then((doc) => ({
        name: name.replace('.json', ''),
        doc,
        docType,
      }))
    )
  )
  return docs
}

async function getDocByName(filename: string, docType: string): Promise<Doc> {
  const contents = await fs.promises.readFile(
    path.join(process.cwd(), getDir(docType), filename),
    ENCODING
  )

  const doc = JSON.parse(contents)
  if (!(DATA_TYPE_KEY in doc)) {
    throw new Error(
      `Expected a document for ${docType}/${filename} instead got ${contents}`
    )
  }

  return doc as Doc
}

export async function getDocBySlug(slug: string, docType: string) {
  return getDocByName(`${slug}.json`, docType)
}

function getDir(docType: string): string {
  return `_${docType.toLowerCase()}`
}
