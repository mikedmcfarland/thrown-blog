import SyntaxHighligher from 'react-syntax-highlighter'
import { SourceBlockNode } from "src/org/types"
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
type Props = { node: SourceBlockNode }
export function SrcBlock({ node }: Props) {
    return (
        <SyntaxHighligher
            showInlineLineNumbers={true}
            showLineNumbers={true}
            style={solarizedDark}
            wrapLongLines={true}
            language={node.properties.language}>
            {node.properties.value}
        </SyntaxHighligher>
    )
}
