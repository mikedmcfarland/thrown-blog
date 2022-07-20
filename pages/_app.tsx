import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'src/theme'
import Header from 'components/Header'
import { getHeaderConfig } from 'src/org/config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header {...getHeaderConfig()} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
