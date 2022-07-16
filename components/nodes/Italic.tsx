import { chakra } from '@chakra-ui/react'
import { ItalicNode } from 'src/org/ItalicNode'

const Span = chakra('i')

type Props = { node: ItalicNode; children: string[] }
export function Italic({ node, children }: Props) {
  return <Span>{children.join(' ')}</Span>
}
