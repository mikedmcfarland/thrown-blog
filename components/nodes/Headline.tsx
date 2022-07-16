import { Box, Heading } from '@chakra-ui/react'
import { HeadlineNode } from 'src/org/HeadlineNode'
import { NodeComponent } from './types'

const sizes = [
  /* "3xl", */
  /* "2xl", */
  /* "xl", */
  'lg',
  'md',
  'sm',
  'xs',
]

export const Headline: NodeComponent<HeadlineNode> = ({
  node,
  children,
  i,
}) => {
  const level = node.properties.level
  const title = node.properties.title
  const size = sizes[level - 1]
  const h = `h${level}`
  const margins = [1, 2]
  return (
    <>
      <Heading
        mb={margins}
        mt={margins}
        // @ts-ignore
        as={h}
        size={size}
      >
        {title}
      </Heading>
      <Box>{children}</Box>
    </>
  )
}
