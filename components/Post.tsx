/* import Image from 'next/image'; */
import { Props as SummaryProps } from 'components/PostSummary'
import {
    Container,
    Heading,
} from '@chakra-ui/react';
type Props = {
    summary: SummaryProps
    children: JSX.Element
}
export function Post(props: Props) {
    return (
        <Container>
            <Heading
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}>
                {props.summary.title}
            </Heading>
            {props.children}
        </Container>
    )
}
