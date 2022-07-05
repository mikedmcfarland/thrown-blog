import { SectionNode } from "src/org/types"
import { NodeComponent } from "./types"

export const Section: NodeComponent<SectionNode> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}
