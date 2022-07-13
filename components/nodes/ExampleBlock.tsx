import { Prism as SyntaxHighligher } from 'react-syntax-highlighter'
import { ExampleBlockNode } from 'src/org/types'
import {
  darcula,
  solarizedlight,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useColorModeValue } from '@chakra-ui/react'
type Props = { node: ExampleBlockNode }
export function ExampleBlock({ node }: Props) {
  return (
    <SyntaxHighligher
      showInlineLineNumbers={true}
      showLineNumbers={true}
      style={useColorModeValue(solarizedlight, darcula)}
      wrapLongLines={false}
      language={'shell'}
    >
      {node.properties.value}
    </SyntaxHighligher>
  )
}
