/* import Image from 'next/image'; */
import {
    Center,
    Container,
    Heading,
    VStack,
} from '@chakra-ui/react';
type Props = {
    summary: {
        title: string
    }
    children: JSX.Element | JSX.Element[]
}
export function Post(props: Props) {
    return (
        <Container maxWidth='4xl'>
            <Center>
                <Heading mb={10} mt={10} textColor="brand.400" fontWeight={800} size='xl' >
                    {props.summary.title}
                </Heading>
            </Center>
            {props.children}
        </Container>
    )
}
