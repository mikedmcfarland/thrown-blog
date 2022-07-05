import { Container } from "@chakra-ui/react"
import { SectionNode } from "src/org/types"
import { NodeComponent } from "./types"

export const Section: NodeComponent<SectionNode> = ({ node, props, children }) => {

    return (
        <Container {...props}>
            {children}
        </Container>
    )
}
