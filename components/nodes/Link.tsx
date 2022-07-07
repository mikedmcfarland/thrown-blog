
import { Link } from "@chakra-ui/react"
import { default as NextLink } from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { LinkNode } from "src/org/types"
import { NodeComponent } from "./types"

export const OrgLink: NodeComponent<LinkNode, (string | JSX.Element)[]> = ({ node, children }) => {
    const href = `${node.properties.type}:${node.properties.path}`
    const isExternal = !node.properties["is-internal"]

    return (
        <NextLink href={href} passHref>
            <Link isExternal={isExternal}>
                {children} <ExternalLinkIcon mx='2px' />
            </Link>
        </NextLink>
    )
}
