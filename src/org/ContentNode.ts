import * as t from 'io-ts'
import BoldNodeIO, { BoldNode } from './BoldNode'
import ExampleBlockNodeIO, { ExampleBlockNode } from './ExampleBlockNode'
import HeadlineNodeIO, { HeadlineNode } from './HeadlineNode'
import ItalicNodeIO, { ItalicNode } from './ItalicNode'
import KeywordNodeIO, { KeywordNode } from './KeywordNode'
import LinkNodeIO, { LinkNode } from './LinkNode'
import ParagraphNodeIO, { ParagraphNode } from './ParagraphNode'
import PlainListNodeIO, { PlainListNode } from './PlainListNode'
import SectionNodeIO, { SectionNode } from './SectionNode'
import SourceBlockNodeIO, { SourceBlockNode } from './SourceBlockNode'
import VerbatimBlockNodeIO, { VerbatimBlockNode } from './VerbatimBlockNode'

export type ContentNode =
  | SectionNode
  | KeywordNode
  | ParagraphNode
  | HeadlineNode
  | PlainListNode
  | SourceBlockNode
  | VerbatimBlockNode
  | LinkNode
  | BoldNode
  | ItalicNode
  | ExampleBlockNode

const ContentNodeIO: t.Type<ContentNode> = t.recursion('ContentNode', () =>
  t.union([
    SectionNodeIO,
    KeywordNodeIO,
    ParagraphNodeIO,
    HeadlineNodeIO,
    PlainListNodeIO,
    SourceBlockNodeIO,
    VerbatimBlockNodeIO,
    LinkNodeIO,
    BoldNodeIO,
    ItalicNodeIO,
    ExampleBlockNodeIO,
  ])
)

export default ContentNodeIO
