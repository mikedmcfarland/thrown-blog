import { Box } from '@chakra-ui/react'
import { SectionNode } from 'src/org/types'
import { NodeComponent } from './types'

const margins = [1, 2, 3]
export const Section: NodeComponent<SectionNode> = ({ node, children }) => {
  return (
    <Box mt={margins} mb={margins}>
      {children}
    </Box>
  )
}
