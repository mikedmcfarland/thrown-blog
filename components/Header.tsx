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
import SocialButton from './SocialButton'
import ToggleColorButton from './ToggleColorButton'

type Props = {
    links: { href: string, name: string }[]
    githubHref: string
    linkedInHref: string
}

export default function Header(props: Props) {
    const linkComponents = props.links.map((l, i) => (
        <Link key={i} href={l.href}>{l.name}</Link>
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
                    <Stack direction={'row'} spacing={6}>
                        <Text>Thrown for a loop</Text> <Logo />
                    </Stack>
                </Stack>

                <Stack direction={'row'} spacing={6}>
                    {linkComponents}
                </Stack>

                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Github'} href={props.githubHref}>
                        <FaGithub />
                    </SocialButton>
                    <SocialButton label={'LinkedIn'} href={props.linkedInHref}>
                        <FaLinkedin />
                    </SocialButton>
                </Stack>

                <ToggleColorButton />
            </Container>

        </Box>
    )
}


