import { Code, Text, Container } from '@chakra-ui/react'

type Props = { node: any }

export function Unknown({ node }: Props) {
  return (
    <Container>
      <Text fontSize="50px" color="red">
        Unknown node type
      </Text>
      <Code>{JSON.stringify(node, null, 2)}</Code>
    </Container>
  )
}
