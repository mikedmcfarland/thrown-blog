/* import Image from 'next/image'; */
import { Props as SummaryProps } from 'components/PostSummary'
import {
    Center,
    Container,
    Heading,
    VStack,
} from '@chakra-ui/react';
type Props = {
    summary: SummaryProps
    children: JSX.Element | JSX.Element[]
}
export function Post(props: Props) {
    return (
        <VStack>
            <Heading size='4xl'>
                {props.summary.title}
            </Heading>

            {props.children}
        </VStack>
    )
}
