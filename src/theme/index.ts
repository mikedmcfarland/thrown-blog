import { mode } from '@chakra-ui/theme-tools';

import { extendTheme, ThemeConfig, withDefaultColorScheme } from '@chakra-ui/react'

const styles = {
    global: props => ({
        body: {
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('gray.100', '#141214')(props),
        },
    }),
};
const colors = {
    brand:
    {
        50: '#ffeede',
        100: '#fcd2b5',
        200: '#f5b589',
        300: '#ef995c',
        400: '#e97c2f',
        500: '#d06216',
        600: '#a34d0f',
        700: '#753609',
        800: '#472001',
        900: '#1e0800',
    }

}

const scheme = withDefaultColorScheme({
    colorScheme: "brand"
})

export const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false
}


export const theme = extendTheme(
    {
        config,
        colors,
        styles
    }
    , scheme
)
