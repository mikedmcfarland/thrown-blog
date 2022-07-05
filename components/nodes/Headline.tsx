import { Container, Heading } from "@chakra-ui/react"
import { HeadlineNode } from "src/org/types"
import { NodeComponent } from "./types"

const sizes = [
    /* "3xl", */
    /* "2xl", */
    "xl",
    "lg",
    "md",
    "sm",
    "xs",
]


export const Headline: NodeComponent<HeadlineNode> = ({ node, children }) => {
    const level = node.properties.level
    const title = node.properties.title
    const size = sizes[level - 1]
    const h = `h${level}`
    return (

        <>
            <Heading as={h} size={size}>{title}</Heading>
            {children}
        </>
    )
}
