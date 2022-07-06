import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

export type Props = {
    category: string
    title: string
    author: string
    authorImage: string
    image: string
    description: string
    date: string
    href: string
}

export function PostSummary(props: Props) {
    return (

        <Link href={props.href}>
            <a>
                <Center py={6}>
                    <Box
                        maxW={'445px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}>

                        <Box
                            h={'210px'}
                            bg={'gray.100'}
                            mt={-6}
                            mx={-6}
                            mb={6}
                            pos={'relative'}>
                            <Image
                                src={props.image}
                                layout={'fill'}
                            />
                        </Box>
                        <Stack>
                            <Text
                                color={'brand.500'}
                                textTransform={'uppercase'}
                                fontWeight={800}
                                fontSize={'sm'}
                                letterSpacing={1.1}>
                                {props.category}
                            </Text>
                            <Heading
                                color={useColorModeValue('gray.700', 'white')}
                                fontSize={'2xl'}
                                fontFamily={'body'}>
                                {props.title}
                            </Heading>
                            <Text color={'gray.500'}>
                                {props.description}
                            </Text>
                        </Stack>
                        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                            <Avatar
                                src={props.authorImage}
                            />
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>{props.author}</Text>
                                <Text color={'gray.500'}>{props.date}</Text>
                            </Stack>
                        </Stack>
                    </Box>


                </Center >
            </a>
        </Link>
    );
}
