import { globalCss } from '../stitches.config'

export const globalStyle = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  html: {
    textSizeAdjust: '100%',
    tabSize: 4,
  },
  body: {
    margin: 0,
    fontFamily: '$untitled',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    lineHeight: '$3',
    fontWeight: '$1',
    bg: '$lv1',
    color: '$hiContrast',
  },
  a: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
})
