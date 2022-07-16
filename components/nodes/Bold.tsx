import { chakra } from '@chakra-ui/react'
import { BoldNode } from 'src/org/BoldNode'

const Span = chakra('span', {
  baseStyle: {
    fontWeight: 'bold',
  },
})

type Props = { node: BoldNode; children: string[] }
export function Bold({ children }: Props) {
  return <Span>{children.join(' ')}</Span>
}
