import Image from 'next/image'
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
} from '@chakra-ui/react'
import Link from 'next/link'

import { FaBook, FaCalendarAlt, FaCodeBranch, FaJava } from 'react-icons/fa'
import { DiDatabase, DiJavascript, DiScala, DiUnitySmall } from 'react-icons/di'
import { FC } from 'react'

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
  console.log('tags', tags)
  const heroComponent = image ? (
    <Image src={image} alt={'Post Image'} layout={'fill'} />
  ) : (
    <Center>
      {' '}
      <Icon w={'210px'} h="100%" as={firstIcon(tags) || FaBook} />
    </Center>
  )

  const tagComponents = tags.map((tag) => {
    const icon = iconForTag(tag)
    return (
      <Tag key={tag}>
        <TagLabel
          color={'brand.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'xs'}
          letterSpacing={1.1}
        >
          <>
            {tag}
            {icon ? <Icon as={icon} /> : null}
          </>
        </TagLabel>
      </Tag>
    )
  })

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
              {heroComponent}
            </Box>
            <Stack>
              <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}
              >
                {title}
              </Heading>
              <HStack>{tagComponents}</HStack>
              <Text color={'gray.500'}>{description}</Text>
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
              <FaCalendarAlt />
              <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                <Text color={'gray.500'}>{date}</Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </a>
    </Link>
  )
}

const tagToIcon: [RegExp, FC][] = [
  [/javascript|js/gi, DiJavascript],
  [/java?!script/gi, FaJava],
  [/scala/gi, DiScala],
  [/code/gi, FaCodeBranch],
  [/unity(3d)/gi, DiUnitySmall],
  [/sql/gi, DiDatabase],
]

function firstIcon(tags: string[]) {
  return tags.map((t) => iconForTag(t)).find((i) => i !== undefined)
}

function iconForTag(tag: string) {
  const [_, icon] = tagToIcon.find(([pattern, _]) => tag.match(pattern)) || []
  return icon
}
