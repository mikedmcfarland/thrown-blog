import fs from 'fs'
import path from 'path'
import { Doc } from 'src/org/types'
import { PathReporter } from 'io-ts/PathReporter'
import { isLeft } from 'fp-ts/lib/These'
import DocIO from './Doc'

const EXT = 'json'
const ENCODING = 'utf8'

export async function getAllDocs(docType: string) {
  const docTypeDir = path.join(process.cwd(), getDir(docType))
  const docDirectories = await fs.promises.readdir(docTypeDir, {
    withFileTypes: true,
  })

  const jsonFiles = await Promise.all(
    docDirectories
      .filter((file) => file.isDirectory())
      .map((file) => file.name)
      .filter((dir) => fs.promises.access(`${docTypeDir}/${dir}/${dir}.${EXT}`))
  )
  const docs = await Promise.all(
    jsonFiles.map((name) =>
      getDocByName(docType, name).then((doc) => ({
        name,
        doc,
        docType,
      }))
    )
  )
  return docs
}

async function getDocByName(docType: string, filename: string): Promise<Doc> {
  const contents = await fs.promises.readFile(
    path.join(process.cwd(), getDir(docType, filename), `${filename}.json`),
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

export async function getDocBySlug(docType: string, slug: string) {
  return getDocByName(docType, `${slug}`)
}

export function getDir(docType: string, filename?: string): string {
  const basePath = `_${docType.toLowerCase()}`
  if (!!filename) {
    return `${basePath}/${filename}`
  }
  return basePath
}
