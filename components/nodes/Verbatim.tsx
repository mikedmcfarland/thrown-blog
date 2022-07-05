import { Code } from "@chakra-ui/react"
import { VerbatimNode } from "src/org/types"

type Props = { node: VerbatimNode }
export function Verbatim({ node }: Props) {
    return (
        <Code>{node.properties.value}</Code>
    )
}
