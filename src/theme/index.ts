import { mode } from '@chakra-ui/theme-tools';

import { extendTheme, ThemeConfig, withDefaultColorScheme } from '@chakra-ui/react'

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
    initialColorMode: "dark",
    useSystemColorMode: true
}


export const theme = extendTheme(
    {
        config,
        colors
    }
    , scheme
)
