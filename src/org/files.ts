import fs from 'fs'
import path from 'path'
import { Doc } from 'src/org/types'
import { PathReporter } from 'io-ts/PathReporter'
import { isLeft } from 'fp-ts/lib/These'
import DocIO from './Doc'

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

  const result = DocIO.decode(JSON.parse(contents))

  if (isLeft(result)) {
    throw new Error(
      `error parsing ${docType}/${filename} ${PathReporter.report(result)} `
    )
  } else {
    return result.right
  }
}

export async function getDocBySlug(slug: string, docType: string) {
  return getDocByName(`${slug}.json`, docType)
}

function getDir(docType: string): string {
  return `_${docType.toLowerCase()}`
}
