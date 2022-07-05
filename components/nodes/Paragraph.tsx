
import { Text } from "@chakra-ui/react"
import { ParagraphNode } from "src/org/types"

type Props = { node: ParagraphNode, props: any }
export function Paragraph({ props, node }: Props) {
    return (
        <Text {...props}> {node.contents.join("")}</Text >
    )
}
