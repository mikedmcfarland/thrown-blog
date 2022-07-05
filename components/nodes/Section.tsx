import { SectionNode } from "src/org/types"
import { NodeComponent } from "./types"

export const Section: NodeComponent<SectionNode> = ({ node, children }) => {
    return (
        <>
            {children}
        </>
    )
}
