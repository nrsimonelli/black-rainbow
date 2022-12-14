import { styled } from '../../stitches.config'

export const Container = styled('div', {
  // local resets here
  flexShrink: 0,
  width: '100%',
  mx: 'auto',

  variants: {
    variant: {
      1: { maxWidth: '$bp1' },
      2: { maxWidth: '$bp2' },
      3: { maxWidth: '$bp3' },
      4: { maxWidth: '$bp4' },
      5: { maxWidth: 'none' },
      responsive: {
        '@initial': {
          maxWidth: 'none',
        },
        '@bp1': {
          maxWidth: '$bp1',
        },
        '@bp2': {
          maxWidth: '$bp2',
        },
        '@bp3': {
          maxWidth: '$bp3',
        },
        '@bp4': {
          maxWidth: '$bp4',
        },
      },
    },
  },
  // defaultVariants: {
  //   variant: 5,
  // },
})
