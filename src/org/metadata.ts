import { KeywordNode, NodeType, OrgDoc, AnyNode, DataType } from "./types"

export function getMetaData(doc: OrgDoc) {
    const metadata: { [key: string]: string } = {}
    for (const node of getChildrenNodes(doc)) {

        if (node.$$data_type$$ != DataType.ORG_DOCUMENT && node.type == NodeType.KEYWORD) {
            const keyword: KeywordNode = node
            metadata[keyword.properties.key] = keyword.properties.value
        }

    }
    return metadata
}

export function getNodesFromDoc(doc: OrgDoc): AnyNode[] {
    return getChildrenNodes(doc)
}

function getNodesFromContent(content: (string | AnyNode)[]): AnyNode[] {
    return content.filter(
        (c: string | AnyNode): c is AnyNode => typeof c !== 'string'
    )
}

export function getChildrenNodes(node: AnyNode): AnyNode[] {
    const contents = node.contents
    const childNodes = getNodesFromContent(contents)
    return childNodes.concat(childNodes.map(c => getChildrenNodes(c)).reduce((a, b) => a.concat(b), []))
}

export function getSummaryData(doc: OrgDoc) {
    const defaults = {
        author: "Michael McFarland",
        image: "https://placekitten.com/500/400",
        authorImage: "https://placekitten.com/200/300"
    }
    const metadata = getMetaData(doc)
    const fromMetaData = {
        title: metadata['TITLE'],
        author: metadata['AUTHOR'],
        image: metadata['IMAGE'],
        description: metadata['DESCRIPTION'],
        category: metadata['CATEGORY'],
        date: metadata['DATE'],
    }

    type Result = typeof defaults & typeof fromMetaData
    type MetaDataKey = keyof typeof fromMetaData

    const summaryData = (Object.keys(fromMetaData) as MetaDataKey[])
        .filter((k: MetaDataKey) => fromMetaData[k] !== undefined)
        .reduce((data, k) => ({ ...data, [k]: fromMetaData[k] }), defaults as Result)


    return summaryData
}

