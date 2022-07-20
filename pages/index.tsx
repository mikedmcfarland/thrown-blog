import { Container, Text, Box, Heading, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 6, md: 12 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Thoughts from a<br />
          <Text as={'span'} color={'brand.400'}>
            Full Stack Engineer
          </Text>
        </Heading>

        <Stack
          direction={'column'}
          spacing={[2, 4]}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
        >
          <Text color={'gray.500'}>
            Some articles, projects, and snippets...
          </Text>
          <Text
            fontSize={'lg'}
            fontFamily={'Caveat'}
            position={'relative'}
            right={'0x'}
            top={'0px'}
            transform={'rotate(10deg)'}
          >
            a work in progress
          </Text>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Home
