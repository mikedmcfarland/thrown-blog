import fs from 'fs'
import path from 'path'
import { OrgDoc } from 'src/org/types'

const DIR = '_posts'
const EXT = '.json'
const ENCODING = 'utf8'

export async function getAllPosts() {
    const files = await fs.promises.readdir(path.join(process.cwd(), DIR))
    const jsonFiles = files.filter(f => path.extname(f).toLowerCase() === EXT)
    const posts = await Promise.all(
        jsonFiles.map(name => getPostByName(name).then(post => ({ name, post })))
    )
    return posts
}

async function getPostByName(filename: string) {
    const contents = await fs.promises.readFile(path.join(process.cwd(), DIR, filename), ENCODING)
    return JSON.parse(contents) as OrgDoc
}

export async function getPostBySlug(slug: string): Promise<OrgDoc> {
    return getPostByName(`${slug}.json`)

}
