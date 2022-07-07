import {
    Box,
    Text,
    Center,
    Code,
    Container,
    Divider,
    HStack,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Logo from './Logo'
import HeaderButton from './HeaderButton'
import ToggleColorButton from './ToggleColorButton'

import { default as NextLink } from 'next/link'
import CircleIcon from './CircleIcon'
import { CheckCircleIcon, CheckIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

type LinkProp = { href: string, name: string }
type Props = {
    links: LinkProp[]
    githubHref: string
    linkedInHref: string
}

function HeaderTextLink({ href, name, hasDivider }: LinkProp & { hasDivider: boolean }) {
    const router = useRouter()

    const active = () => (<Text fontWeight={"800"}> {name} </Text>)
    const notActive = () => (
        <>
            <NextLink href={href} passHref >
                <Link>
                    {name}
                </Link>
            </NextLink>

            {hasDivider ? (<CircleIcon alignSelf={"center"} boxSize={1} />) : <></>}
        </>
    )

    return router.asPath === href ? active() : notActive()
}

function HeaderMenuLink({ href, name }: LinkProp) {
    const router = useRouter()
    const isActive = router.asPath === href
    return (
        <NextLink href={href} passHref>
            <MenuItem icon={isActive ? <CheckCircleIcon color="green" /> : undefined} as="a" isDisabled={isActive} >
                {name}
            </MenuItem>
        </NextLink>
    )
}

export default function Header(props: Props) {

    const linkComponents = () => props.links.map((l, i, ls) => {
        const hasDivider = i !== ls.length - 1
        return (
            <HeaderTextLink key={i} {...l} hasDivider={hasDivider} />
        )
    })

    const linkMenuButtons = () => props.links.map((l, i) => {
        return (<HeaderMenuLink key={i} {...l} />)
    })

    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container
                as={HStack}
                maxW={'4xl'}
                py={4}
                justify={'center'}
                justifyContent={'space-between'}
                alignItems={'center'}
                align={'center'}>

                <Box as="nav" display={{ md: "none" }}>
                    <Menu isLazy>
                        <MenuButton
                            as={IconButton}
                            aria-label='Naviation'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            {linkMenuButtons()}
                        </MenuList>
                    </Menu>
                </Box>

                <Stack direction={'row'} spacing={4}>
                    <NextLink href="/" >
                        <a style={{ textDecoration: 'none' }}>
                            <Stack direction={'row'} spacing={4}>
                                <Code fontWeight={"900"} fontSize="2xl" noOfLines={1}>Thrown</Code><Logo display={{ base: "none", md: "flex" }} />
                            </Stack>
                        </a>
                    </NextLink>
                </Stack>

                <Center height='8' display={{ base: 'none', md: "flex" }}>
                    <Divider orientation='vertical' />
                </Center>

                <Stack display={{ base: 'none', md: 'flex' }} as={'nav'} direction={'row'} spacing={2}>
                    {linkComponents()}
                </Stack>

                <Center height='8' display={{ base: 'none', md: "flex" }}>
                    <Divider orientation='vertical' />
                </Center>


                <Stack direction={'row'} spacing={4}>
                    <HeaderButton label={'Github'} href={props.githubHref}>
                        <FaGithub />
                    </HeaderButton>
                    <HeaderButton label={'LinkedIn'} href={props.linkedInHref}>
                        <FaLinkedin />
                    </HeaderButton>
                </Stack>

                <Center height='8'>
                    <Divider orientation='vertical' />
                </Center>

                <ToggleColorButton />
            </Container>


        </Box >
    )
}
