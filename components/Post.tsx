import {
  Box,
  Container,
  Heading,
  HStack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import HeroImage from './HeroImage'
import Date from './Date'
import PostTag from './PostTag'
import { FaTag, FaTags } from 'react-icons/fa'
type Props = {
  summary: Summary
  children: JSX.Element | JSX.Element[]
}

type Summary = {
  category: string
  title: string
  image?: string
  date?: string
  tags: string[]
}

export function Post({ summary, children }: Props) {
  const { title, date, tags } = summary

  return (
    <Container maxWidth="4xl">
      <Box
        w={'full'}
        bg={useColorModeValue('gray.100', 'gray.700')}
        rounded={'md'}
        overflow={'hidden'}
      >
        <VStack mb={10} mt={10}>
          <HStack>
            <VStack alignItems={'left'} ml={[3, 7]}>
              <Heading
                textColor="brand.400"
                textAlign={'center'}
                fontWeight={800}
                size="xl"
                mb={[3, 7]}
              >
                {title}
              </Heading>

              {tags.length > 0 && (
                <HStack>
                  {tags.length > 1 ? <FaTags /> : <FaTag />}
                  {tags.map((tag, i) => (
                    <PostTag key={i} tag={tag} />
                  ))}
                </HStack>
              )}

              {date && <Date date={date} />}
            </VStack>
            <HeroImage {...summary} />
          </HStack>
        </VStack>
      </Box>

      {children}
    </Container>
  )
}
