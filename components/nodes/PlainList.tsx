import { UnorderedList } from '@chakra-ui/react'
import { PlainListNode } from 'src/org/types'
import { NodeComponent } from './types'

export const PlainList: NodeComponent<PlainListNode> = ({ node, children }) => {
  return <UnorderedList>{children}</UnorderedList>
}
