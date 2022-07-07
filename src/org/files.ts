import fs from 'fs'
import path from 'path'
import { OrgDoc } from 'src/org/types'

const EXT = '.json'
const ENCODING = 'utf8'

export async function getAllDocs(docType: string) {
    const files = await fs.promises.readdir(path.join(process.cwd(), getDir(docType)))
    const jsonFiles = files.filter(f => path.extname(f).toLowerCase() === EXT)
    const docs = await Promise.all(
        jsonFiles.map(name => getPostByName(name, docType).then(doc => ({ name: name.replace(".json", ""), doc, docType })))
    )
    return docs
}

async function getPostByName(filename: string, docType: string) {
    const contents = await fs.promises.readFile(path.join(process.cwd(), getDir(docType), filename), ENCODING)
    return JSON.parse(contents) as OrgDoc
}

export async function getPostBySlug(slug: string, docType: string): Promise<OrgDoc> {
    return getPostByName(`${slug}.json`, docType)

}

function getDir(docType: string) {
    return `_${docType.toLowerCase()}`
}
