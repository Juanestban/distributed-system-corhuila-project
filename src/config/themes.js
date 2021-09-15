import { extendTheme } from '@chakra-ui/react'
// import {mode} from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  colors: {},
  styles: {
    global: () => ({
      '.chakra-form-control': {
        padding: '10px 0',
      },
      // 'a, p, button, h1, h2, h3, h4': {
      //   userSelect: 'none',
      // },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
    FormControl: {
      baseStyle: {
        padding: '10px 0',
      },
    },
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Roboto',
  },
})
