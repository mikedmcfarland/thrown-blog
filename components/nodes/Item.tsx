import { ListItem } from "@chakra-ui/react"
import { ItemNode } from "src/org/types"
import { NodeComponent } from "./types"

export const Item: NodeComponent<ItemNode> = ({ node, props, children }) => {
    return (
        <ListItem {...props}>
            {children}
        </ListItem>
    )
}
