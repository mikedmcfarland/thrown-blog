import { ColorModeScript } from "@chakra-ui/react"
import { Html, Head, Main, NextScript } from 'next/document'
import { config } from 'src/theme'
export default function Document() {
    const initialColorMode = config.initialColorMode
    return (
        <Html>
            <Head />
            <body>
                <ColorModeScript initialColorMode={initialColorMode} />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
