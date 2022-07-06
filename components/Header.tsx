import {
    Box,
    Container,
    HStack,
    Link,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Logo from './Logo'
import HeaderButton from './SocialButton'
import ToggleColorButton from './ToggleColorButton'

import { default as NextLink } from 'next/link'

type LinkProp = { href: string, name: string }
type Props = {
    links: LinkProp[]
    githubHref: string
    linkedInHref: string
}

function HeaderTextLink({ href, name }: LinkProp) {

    return (
        <NextLink href={href} passHref>
            <Link>
                {name}
            </Link>
        </NextLink>
    )
}

export default function Header(props: Props) {
    const linkComponents = props.links.map((l, i) => (
        <HeaderTextLink key={i} {...l} />
    ))

    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container
                as={HStack}
                maxW={'6xl'}
                py={4}
                spacing={20}
                justify={'center'}
                align={'center'}>

                <Stack direction={'row'} spacing={6}>
                    <Link href="/" textDecoration={'none'}>
                        <Stack direction={'row'} spacing={6}>
                            <Text noOfLines={1} fontWeight={"bold"} fontSize="2xl" >Thrown for a loop</Text><Logo />
                        </Stack>
                    </Link>
                </Stack>

                <Stack direction={'row'} spacing={6}>
                    {linkComponents}
                </Stack>

                <Stack direction={'row'} spacing={6}>
                    <HeaderButton label={'Github'} href={props.githubHref}>
                        <FaGithub />
                    </HeaderButton>
                    <HeaderButton label={'LinkedIn'} href={props.linkedInHref}>
                        <FaLinkedin />
                    </HeaderButton>
                </Stack>

                <ToggleColorButton />
            </Container>

        </Box>
    )
}


