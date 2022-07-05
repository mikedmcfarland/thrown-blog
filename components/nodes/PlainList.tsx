
import { OrderedList } from "@chakra-ui/react"
import { PlainListNode } from "src/org/types"
import { NodeComponent } from "./types"

export const PlainList: NodeComponent<PlainListNode> = ({ node, props, children }) => {
    return (
        <OrderedList {...props}>
            {children}
        </OrderedList>
    )
}
