import { Link } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { NodeComponent } from './types'
import { LinkNode } from 'src/org/LinkNode'

export const OrgLink: NodeComponent<LinkNode, (string | JSX.Element)[]> = ({
  node,
  children,
}) => {
  const properties = node.properties
  const href = determineHref(properties.type, properties.path)
  const isExternal = !node.properties['is-internal']

  return (
    <NextLink href={href} passHref>
      <Link isExternal={isExternal}>
        {children} <ExternalLinkIcon mx="2px" />
      </Link>
    </NextLink>
  )
}

function determineHref(linkType: string, path: string): string {
  switch (linkType) {
    case 'file':
      return `/${path}`
    default:
      return `${linkType}:${path}`
  }
}
