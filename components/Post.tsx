/* import Image from 'next/image'; */
import {
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
        <VStack>
            <Heading size='4xl'>
                {props.summary.title}
            </Heading>

            <Container maxWidth='7xl'>
                {props.children}
            </Container>
        </VStack>
    )
}
