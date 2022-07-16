import { ListItem } from '@chakra-ui/react'
import { ItemNode } from 'src/org/ItemNode'
import { NodeComponent } from './types'

export const Item: NodeComponent<ItemNode> = ({ children }) => {
  return <ListItem>{children}</ListItem>
}
