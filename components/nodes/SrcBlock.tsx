import { Prism as SyntaxHighligher } from 'react-syntax-highlighter'
import { SourceBlockNode } from "src/org/types"
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
type Props = { node: SourceBlockNode }
export function SrcBlock({ node }: Props) {
    return (
        <SyntaxHighligher
            showInlineLineNumbers={true}
            showLineNumbers={true}
            style={darcula}
            wrapLongLines={false}
            language={node.properties.language}>
            {node.properties.value}
        </SyntaxHighligher>
    )
}
