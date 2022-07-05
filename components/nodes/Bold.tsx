/* import { Tag, Text } from "@chakra-ui/react" */
import { BoldNode } from "src/org/types"
import { chakra } from '@chakra-ui/react'


const Span = chakra('span', {
    baseStyle: {
        fontWeight: "bold"
    }
})

type Props = { node: BoldNode, children: string[] }
export function Bold({ node, children }: Props) {
    return (
        <Span>{children.join(" ")}</Span>
    )
}
