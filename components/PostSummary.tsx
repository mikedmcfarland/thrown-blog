import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    HStack,
    Tag,
    TagLabel,
    Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaBook, FaCalendarAlt } from 'react-icons/fa';

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
                            bg={useColorModeValue('gray.100', 'gray.700')}
                            mt={-6}
                            mx={-6}
                            mb={6}
                            pos={'relative'}>
                            {!!props.image ?
                                <Image
                                    src={props.image}
                                    layout={'fill'}
                                />
                                : <Center> <Icon w={"210px"} h="100%" as={FaBook} /></Center>}

                        </Box>
                        <Stack>
                            {!!props.category ? (
                                <HStack>
                                    <Tag >
                                        <TagLabel
                                            color={'brand.500'}
                                            textTransform={'uppercase'}
                                            fontWeight={800}
                                            fontSize={'sm'}
                                            letterSpacing={1.1}>
                                            {props.category}
                                        </TagLabel>
                                    </Tag>
                                </HStack>
                            ) : null}
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
                            <FaCalendarAlt />
                            {/* <Avatar
                                src={props.authorImage}
                            /> */}
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                {/* <Text fontWeight={600}>{props.author}</Text> */}
                                <Text color={'gray.500'}>{props.date}</Text>
                            </Stack>
                        </Stack>
                    </Box>


                </Center >
            </a>
        </Link >
    );
}
