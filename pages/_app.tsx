import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { theme } from 'src/theme'
import Header from 'components/Header'
import { getHeaderConfig } from 'src/org/config'

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <ChakraProvider theme={theme}>
            <ColorModeProvider>
                <Header {...getHeaderConfig()} />
                <Component {...pageProps} />
            </ColorModeProvider>
        </ChakraProvider >
    )

}




export default MyApp
