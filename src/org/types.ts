export interface OrgDoc {
    "$$data_type$$": DataType.ORG_DOCUMENT
    properties: {
        title: string
    }
    contents: Exclude<AnyNode, OrgDoc>[]
}

type ContentNode = SectionNode | ParagraphNode | HeadlineNode | SourceBlockNode | VerbatimNode
export type AnyNode = OrgDoc | SectionNode | KeywordNode | ParagraphNode | HeadlineNode | ItemNode | PlainListNode | VerbatimNode | SourceBlockNode

export enum DataType {
    ORG_NODE = 'org-node',
    ORG_DOCUMENT = 'org-document',
}

export enum NodeType {
    SECTION = 'section',
    KEYWORD = 'keyword',
    PARAGRAPH = 'paragraph',
    HEADLINE = 'headline',
    ITEM = 'item',
    PLAIN_LIST = 'plain-list',
    VERBATIM = 'verbatim',
    SRC_BLOCK = 'src-block'
}


type Node<CT = ContentNode[]> = {
    "$$data_type$$": DataType.ORG_NODE,
    contents: CT
    ref?: string
}

// type Node<NT extends NodeType, CT, PT extends { [k: string]: string } = {}> = {
//     "$$data_type$$": DataType.ORG_NODE,
//     "type": keyof NT
//     properties: PT
//     contents: CT
//     ref?: string
// }

export interface SectionNode extends Node {
    "type": NodeType.SECTION
}

export interface KeywordNode extends Node<never> {
    "type": NodeType.KEYWORD
    properties: {
        key: string,
        value: string
    }
}

export interface ParagraphNode extends Node<string[]> { }
export interface ParagraphNode {
    "type": NodeType.PARAGRAPH
}

export interface HeadlineNode extends Node {
    "type": NodeType.HEADLINE
    properties: {
        title: string[],
        "raw-value": string,
        level: number

    }
}

export interface ItemNode extends Node {
    "type": NodeType.ITEM
}

export interface PlainListNode extends Node<ItemNode[]> {
    "type": NodeType.PLAIN_LIST


}

export interface SourceBlockNode extends Node<never> {
    "type": NodeType.SRC_BLOCK
    properties: {
        language: string
        value: string
    }
}

export interface VerbatimNode extends Node<never> {
    "type": NodeType.VERBATIM
    properties: {
        value: string
    }
}
