
import { Text } from "@chakra-ui/react"
import { ParagraphNode } from "src/org/types"

type Props = { node: ParagraphNode, children: JSX.Element | JSX.Element[] }
export function Paragraph({ children }: Props) {
    return (
        <Text>{children}</Text >
    )
}
