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
        <Container maxWidth='4xl'>
            <Heading mb={10} textColor="brand.600" fontWeight={"bold"} size='2xl'>
                {props.summary.title}
            </Heading>
            {props.children}
        </Container>
    )
}
