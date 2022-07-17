import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react'
import Link from 'next/link'

import Date from './Date'
import HeroImage from './HeroImage'
import PostTag from './PostTag'

export type Props = {
  category: string
  title: string
  image?: string
  description: string
  date: string
  href: string
  tags: string[]
}

export function PostSummary({
  image,
  tags,
  href,
  title,
  description,
  date,
}: Props) {
  return (
    <Link href={href}>
      <a>
        <Center py={6}>
          <Box
            maxW={'445px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
          >
            <Box
              h={'210px'}
              bg={useColorModeValue('gray.100', 'gray.700')}
              mt={-6}
              mx={-6}
              mb={6}
              pos={'relative'}
            >
              <HeroImage image={image} tags={tags} />
            </Box>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}
              >
                {title}
              </Heading>
              <HStack>
                {tags.map((tag, i) => (
                  <PostTag key={i} tag={tag} />
                ))}
              </HStack>
              <Text color={'gray.500'}>{description}</Text>
            </Stack>
            <Date mt={6} date={date} />
          </Box>
        </Center>
      </a>
    </Link>
  )
}
