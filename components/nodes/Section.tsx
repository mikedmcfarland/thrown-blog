import { Box } from "@chakra-ui/react"
import { SectionNode } from "src/org/types"
import { NodeComponent } from "./types"

const margins = [2, 3, 4]
export const Section: NodeComponent<SectionNode> = ({ children }) => {
    return (
        <Box mt={margins} mb={margins}>
            {children}
        </Box >
    )
}
