import { Code } from "@chakra-ui/react"
import { VerbatimNode } from "src/org/types"

type Props = { node: VerbatimNode, props: any }
export function Verbatim({ props, node }: Props) {
    return (
        <Code {...props}>
            {node.properties.value}
        </Code>
    )
}
