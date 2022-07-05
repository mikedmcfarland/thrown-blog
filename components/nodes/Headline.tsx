import { Heading } from "@chakra-ui/react"
import { HeadlineNode } from "src/org/types"
import { NodeComponent } from "./types"

export const Headline: NodeComponent<HeadlineNode> = ({ node, children }) => {
    const level = node.properties.level
    const title = node.properties.title
    return (
        <>
            <Heading>{title}</Heading>
            {children}
        </>
    )
}
