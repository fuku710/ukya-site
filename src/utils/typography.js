import Typography from 'typography'

const googleFonts = [
  {
    name: 'M PLUS 1p',
    styles: ['400'],
  },
  {
    name: 'M PLUS Rounded 1c',
    styles: ['400'],
  },
]

const typography = new Typography({
  googleFonts: googleFonts,
  headerFontFamily: ['M PLUS 1p'],
  bodyFontFamily: ['M PLUS Rounded 1c','YuGothic','Yu Gothic','sans-serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
