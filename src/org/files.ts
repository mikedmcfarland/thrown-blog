import fs from 'fs'
import path from 'path'
import { OrgDoc, MetaDoc, isOrgDoc } from 'src/org/types'

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
    return JSON.parse(contents) as (OrgDoc | MetaDoc)
}

export async function getDocBySlug(slug: string, docType: string): Promise<OrgDoc> {

    const result = await getPostByName(`${slug}.json`, docType)
    if (!isOrgDoc(result)) {
        throw new Error(`Expected org doc result from ${docType}/${slug}`)
    }
    return result
}


function getDir(docType: string) {
    return `_${docType.toLowerCase()}`
}
