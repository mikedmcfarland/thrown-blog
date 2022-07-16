import { Code } from '@chakra-ui/react'
import { VerbatimBlockNode } from 'src/org/VerbatimBlockNode'

type Props = { node: VerbatimBlockNode }
export function Verbatim({ node }: Props) {
  return <Code>{node.properties.value}</Code>
}
