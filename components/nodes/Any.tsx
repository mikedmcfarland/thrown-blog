import { ContentNode } from 'src/org/ContentNode'
import { ItemNode } from 'src/org/ItemNode'
import { NodeType } from 'src/org/types'
import { Bold } from './Bold'
import { ExampleBlock } from './ExampleBlock'
import { Headline } from './Headline'
import { Italic } from './Italic'
import { Item } from './Item'
import { Keyword } from './Keyword'
import { OrgLink } from './Link'
import { Paragraph } from './Paragraph'
import { PlainList } from './PlainList'
import { Section } from './Section'
import { SrcBlock } from './SrcBlock'
import { Unknown } from './Unknown'
import { Verbatim } from './Verbatim'

type Props = { node: Node; i: number }
type Node = ContentNode | ItemNode

export default function Any({ node, i }: Props): JSX.Element {
  const hasRef = 'ref' in node
  const key = hasRef ? `${node.ref}:${i}` : `${i}`
  const id = hasRef ? node.ref : undefined
  const props = { key, id, i }

  const renderAny = (node: Node, i: number) => <Any i={i} node={node} key={i} />

  switch (node.type) {
    case NodeType.HEADLINE:
      return (
        <Headline {...props} node={node}>
          {node.contents.map(renderAny)}
        </Headline>
      )
    case NodeType.ITEM:
      return (
        <Item {...props} node={node}>
          {node.contents.map(renderAny)}
        </Item>
      )
    case NodeType.KEYWORD:
      return <Keyword {...props} node={node} />
    case NodeType.PARAGRAPH:
      return <Paragraph node={node} renderFn={renderAny} {...props} />
    case NodeType.PLAIN_LIST:
      return (
        <PlainList {...props} node={node}>
          {node.contents.map(renderAny)}
        </PlainList>
      )
    case NodeType.SECTION:
      return (
        <Section {...props} node={node}>
          {node.contents.map(renderAny)}
        </Section>
      )
    case NodeType.SRC_BLOCK:
      return <SrcBlock {...props} node={node} />

    case NodeType.VERBATIM_BLOCK:
      return <Verbatim {...props} node={node} />
    case NodeType.LINK:
      return (
        <OrgLink {...props} node={node}>
          {node.contents}
        </OrgLink>
      )

    case NodeType.BOLD:
      return (
        <Bold {...props} node={node}>
          {node.contents}
        </Bold>
      )
    case NodeType.ITALIC:
      return (
        <Italic {...props} node={node}>
          {node.contents}
        </Italic>
      )

    case NodeType.EXAMPLE_BLOCK:
      return <ExampleBlock {...props} node={node} />
    default:
      const unexpectedNode: never = node
      console.error('unexpected node', unexpectedNode)
      return <Unknown {...props} node={unexpectedNode} />
  }
}
