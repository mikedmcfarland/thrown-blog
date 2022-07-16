import { UnorderedList } from '@chakra-ui/react'
import { PlainListNode } from 'src/org/PlainListNode'
import { NodeComponent } from './types'

export const PlainList: NodeComponent<PlainListNode> = ({ children }) => {
  return <UnorderedList>{children}</UnorderedList>
}
