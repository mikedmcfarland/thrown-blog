import { Container, Text, Box, Heading, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Stray thoughts from a<br />
          <Text as={'span'} color={'brand.400'}>
            Software Engineer
          </Text>
        </Heading>

        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
        >
          <Text color={'gray.500'}>
            Some articles, projects, and snippets...
          </Text>

          <Box>
            <Text
              fontSize={'lg'}
              fontFamily={'Caveat'}
              position={'absolute'}
              right={'-125px'}
              top={'-15px'}
              transform={'rotate(10deg)'}
            >
              a work in progress
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Home
