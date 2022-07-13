import { AnyNode, NodeType, OrgDoc } from 'src/org/types'
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

type Node = Exclude<AnyNode, OrgDoc>
type Props = { node: Node; i: number }
export default function Any({ node, i }: Props): JSX.Element {
  const key = `${node.ref}:${i}`
  const id = node.ref
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

    case NodeType.VERBATIM:
      return <Verbatim {...props} node={node} />
    case NodeType.LINK:
      return (
        <OrgLink {...props} node={node}>
          {node.contents.map((c, i) => {
            if (typeof c === 'string') {
              return c
            } else {
              return renderAny(c, i)
            }
          })}
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
      return <Unknown {...props} node={node} />
  }
}
