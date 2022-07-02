export interface OrgDoc {
    "$$data_type$$": "org-document"
    properties: {
        title: string
    }
    contents: (KeywordNode | ContentNode)[]
}

type ContentNode = SectionNode | ParagraphNode | HeadlineNode | SourceBlockNode | VerbatimNode


export interface SectionNode {
    "$$data_type$$": "org-node"
    "type": "section"
    ref: string
    contents: ContentNode[]
}

export interface KeywordNode {
    "$$data_type$$": "org-node"
    "type": "keyword"
    ref: string
}

export interface ParagraphNode {
    "$$data_type$$": "org-node"
    "type": "paragraph"
    ref: string
    contents: string[]
}

export interface HeadlineNode {

    "$$data_type$$": "org-node"
    "type": "headline"
    ref: string
    properties: {
        title: string[],
        "raw-value": string
        level: number
    }
    contents: ContentNode[]
}

export interface ItemNode {

    "$$data_type$$": "org-node"
    "type": "item"
    ref: string
    contents: ContentNode[]
}

export interface PlainListNode {

    "$$data_type$$": "org-node"
    "type": "plain-list"
    ref: string
    properties: {}
    contents: ItemNode[]
}

export interface SourceBlockNode {

    "$$data_type$$": "src-block"
    ref: string
    properties: {
        language: string
        value: string
    }
}

export interface VerbatimNode {

    "$$data_type$$": "org-node"
    "type": "verbatim"
    ref: string
    properties: {
        value: string
    }
}
