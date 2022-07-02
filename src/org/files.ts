import fs from 'fs'
import path from 'path'
import { OrgDoc } from 'src/org/types'

const DIR = '_posts'
const EXT = '.json'
const ENCODING = 'utf8'

export async function getAllPosts() {

    const files = await fs.promises.readdir(path.join(process.cwd(), DIR))
    const jsonFiles = files.filter(f => path.extname(f).toLowerCase() === EXT)
    const jsonFilesContents = await Promise.all(
        jsonFiles.map(filename => fs.promises.readFile(path.join(process.cwd(), DIR, filename), ENCODING))
    )
    return jsonFilesContents.map(content => JSON.parse(content) as OrgDoc)

}
