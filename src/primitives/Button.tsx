import { styled } from '../../stitches.config'

export const Button = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: '$5',
  px: '$2',
  fontFamily: '$untitled',
  fontSize: '$2',
  fontWeight: '$2',
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$mauve2',
    boxShadow: 'inset 0 0 0 1px $colors$mauve7',
    color: '$mauve8',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        px: '$2',
        fontSize: '$1',
        lineHeight: '$sizes$5',
      },
      '2': {
        borderRadius: '$2',
        height: '$6',
        px: '$3',
        fontSize: '$3',
        lineHeight: '$sizes$6',
      },
      '3': {
        borderRadius: '$2',
        height: '$7',
        px: '$4',
        fontSize: '$4',
        lineHeight: '$sizes$7',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$primary2',
        boxShadow: 'inset 0 0 0 1px $colors$primary7',
        color: '$primary11',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$primary8',
        },
        '&:active': {
          backgroundColor: '$primary3',
          boxShadow: 'inset 0 0 0 1px $colors$primary8',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$primary8, 0 0 0 1px $colors$primary8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$primary4',
            boxShadow: 'inset 0 0 0 1px $colors$primary8',
          },
      },
      secondary: {
        backgroundColor: '$secondary2',
        boxShadow: 'inset 0 0 0 1px $colors$secondary7',
        color: '$secondary11',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$secondary8',
        },
        '&:active': {
          backgroundColor: '$secondary3',
          boxShadow: 'inset 0 0 0 1px $colors$secondary8',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$secondary8, 0 0 0 1px $colors$secondary8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$secondary4',
            boxShadow: 'inset 0 0 0 1px $colors$secondary8',
          },
      },
      accent: {
        backgroundColor: '$accent2',
        boxShadow: 'inset 0 0 0 1px $colors$accent7',
        color: '$accent11',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$accent8',
        },
        '&:active': {
          backgroundColor: '$accent3',
          boxShadow: 'inset 0 0 0 1px $colors$accent8',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$accent8, 0 0 0 1px $colors$accent8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$accent4',
            boxShadow: 'inset 0 0 0 1px $colors$accent8',
          },
      },
      transparentWhite: {
        backgroundColor: 'hsla(0,100%,100%,.2)',
        color: 'white',
        '&:hover': {
          backgroundColor: 'hsla(0,100%,100%,.25)',
        },
        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,.3)',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
        },
      },
      transparentBlack: {
        backgroundColor: 'hsla(0,0%,0%,.2)',
        color: 'black',
        '&:hover': {
          backgroundColor: 'hsla(0,0%,0%,.25)',
        },
        '&:active': {
          backgroundColor: 'hsla(0,0%,0%,.3)',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$mauve4',
        boxShadow: 'inset 0 0 0 1px $colors$mauve8',
        color: '$mauve11',
        '&:hover': {
          backgroundColor: '$mauve5',
          boxShadow: 'inset 0 0 0 1px $colors$mauve8',
        },
        '&:active': {
          backgroundColor: '$mauve5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$mauve8, 0 0 0 1px $colors$mauve8',
        },
      },
      waiting: {
        backgroundColor: '$mauve4',
        boxShadow: 'inset 0 0 0 1px $colors$mauve8',
        color: 'transparent',
        pointerEvents: 'none',

        '&:hover': {
          backgroundColor: '$mauve5',
          boxShadow: 'inset 0 0 0 1px $colors$mauve8',
        },
        '&:active': {
          backgroundColor: '$mauve5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$mauve8',
        },
      },
    },
    type: {
      ghost: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
      hot: {
        boxShadow: 'none',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      type: 'ghost',
      css: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '$primaryA3',
          boxShadow: 'none',
        },
        '&:active': {
          backgroundColor: '$primaryA4',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$primaryA8, 0 0 0 1px $colors$primaryA8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$primaryA4',
            boxShadow: 'none',
          },
      },
    },
    {
      variant: 'secondary',
      type: 'ghost',
      css: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '$secondaryA3',
          boxShadow: 'none',
        },

        '&:active': {
          backgroundColor: '$secondaryA4',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$secondaryA8, 0 0 0 1px $colors$secondaryA8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$secondaryA4',
            boxShadow: 'none',
          },
      },
    },
    {
      variant: 'accent',
      type: 'ghost',
      css: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '$accentA3',
          boxShadow: 'none',
        },
        '&:active': {
          backgroundColor: '$accentA4',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$accentA8, 0 0 0 1px $colors$accentA8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$accentA4',
            boxShadow: 'none',
          },
      },
    },
    {
      variant: 'primary',
      type: 'hot',
      css: {
        backgroundColor: '$primary9',
        boxShadow: 'none',
        color: '$primary1',
        '&:hover': {
          backgroundColor: '$primary10',
          boxShadow: 'none',
        },
        '&:active': {
          backgroundColor: '$primary11',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$primary8, 0 0 0 1px $colors$primary8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$primary11',
            boxShadow: 'none',
          },
      },
    },
    {
      variant: 'accent',
      type: 'hot',
      css: {
        backgroundColor: '$accent9',
        color: '$primary1',
        '&:hover': {
          backgroundColor: '$accent10',
          boxShadow: 'none',
        },
        '&:active': {
          backgroundColor: '$accent11',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$accent8, 0 0 0 1px $colors$accent8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$accent11',
            boxShadow: 'none',
          },
      },
    },
    {
      variant: 'secondary',
      type: 'hot',
      css: {
        backgroundColor: '$secondary9',
        color: '$primary1',
        '&:hover': {
          backgroundColor: '$secondary10',
          boxShadow: 'none',
        },
        '&:active': {
          backgroundColor: '$secondary11',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$secondary8, 0 0 0 1px $colors$secondary8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$secondary11',
            boxShadow: 'none',
          },
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'primary',
  },
})
