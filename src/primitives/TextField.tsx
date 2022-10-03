import { styled } from '../../stitches.config'

export const TextField = styled('input', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '$full',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $colors$primary7',
  color: '$hiContrast',
  // fontVariantNumeric: 'tabular-nums',

  '&:-webkit-autofill': {
    boxShadow:
      'inset 0 0 0 1px $colors$secondary6, inset 0 0 0 100px $colors$secondary3',
  },

  '&:-webkit-autofill::first-line': {
    fontFamily: '$untitled',
    color: '$hiContrast',
  },

  '&:focus': {
    boxShadow:
      'inset 0px 0px 0px 1px $colors$secondary8, 0px 0px 0px 1px $colors$secondary8',
    '&:-webkit-autofill': {
      boxShadow:
        'inset 0px 0px 0px 1px $colors$secondary8, 0px 0px 0px 1px $colors$secondary8, inset 0 0 0 100px $colors$secondary3',
    },
  },
  '&::placeholder': {
    color: '$primary9',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$primary2',
    color: '$primary8',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$primary7',
    },
  },
  '&:read-only': {
    backgroundColor: '$primary2',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$primary7',
    },
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        fontSize: '$1',
        px: '$1',
        lineHeight: '$sizes$5',
        '&:-webkit-autofill::first-line': {
          fontSize: '$1',
        },
      },
      '2': {
        borderRadius: '$2',
        height: '$6',
        fontSize: '$3',
        px: '$2',
        lineHeight: '$sizes$6',
        '&:-webkit-autofill::first-line': {
          fontSize: '$3',
        },
      },
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$primary7',
          },
        },
        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow:
            'inset 0px 0px 0px 1px $colors$secondary8, 0px 0px 0px 1px $colors$secondary8',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
      },
    },
    state: {
      invalid: {
        boxShadow: 'inset 0 0 0 1px $colors$error7',
        '&:focus': {
          boxShadow:
            'inset 0px 0px 0px 1px $colors$error8, 0px 0px 0px 1px $colors$error8',
        },
      },
      valid: {
        boxShadow: 'inset 0 0 0 1px $colors$success7',
        '&:focus': {
          boxShadow:
            'inset 0px 0px 0px 1px $colors$success8, 0px 0px 0px 1px $colors$success8',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
})
