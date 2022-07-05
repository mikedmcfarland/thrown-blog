import { Code } from "@chakra-ui/react"
import { SourceBlockNode } from "src/org/types"
type Props = { node: SourceBlockNode, props: any }
export function SrcBlock({ props, node }: Props) {
    return (
        <Code {...props}>
            {node.properties.value}
        </Code>
    )
}
