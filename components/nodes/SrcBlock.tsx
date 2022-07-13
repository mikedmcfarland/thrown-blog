import { Prism as SyntaxHighligher } from 'react-syntax-highlighter'
import { SourceBlockNode } from 'src/org/types'
import {
  darcula,
  solarizedlight,
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useColorModeValue } from '@chakra-ui/react'
type Props = { node: SourceBlockNode }
export function SrcBlock({ node }: Props) {
  return (
    <SyntaxHighligher
      showInlineLineNumbers={true}
      showLineNumbers={true}
      style={useColorModeValue(solarizedlight, darcula)}
      wrapLongLines={false}
      language={node.properties.language}
    >
      {node.properties.value}
    </SyntaxHighligher>
  )
}
