import { Container, Text, Box, Heading, Icon, Stack, useColorModeValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Container maxW={'3xl'}>

                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Stray thoughts from a<br />
                        <Text as={'span'} color={'brand.400'}>
                            Programmer
                        </Text>
                    </Heading>


                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>

                        <Text color={'gray.500'}>
                            Simple articles, snippets, thoughts, and projects...
                        </Text>

                        <Box>
                            <Text
                                fontSize={'lg'}
                                fontFamily={'Caveat'}
                                position={'absolute'}
                                right={'-125px'}
                                top={'-15px'}
                                transform={'rotate(10deg)'}>
                                a work in progress
                            </Text>
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </>

    )
}


export default Home
