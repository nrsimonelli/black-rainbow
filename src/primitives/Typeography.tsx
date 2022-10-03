import { styled } from '../../stitches.config'

export const Typeography = styled('span', {
  // local resets here
  display: 'block',
  userSelect: 'none',
  lineHeight: '$1',
  width: 'max-content',

  variants: {
    size: {
      '1': {
        fontSize: '$1',
      },
      '2': {
        fontSize: '$2',
      },
      '3': {
        fontSize: '$3',
      },
      '4': {
        fontSize: '$4',
      },
      '5': {
        fontSize: '$5',
        // letterSpacing: '-.015em',
      },
      '6': {
        fontSize: '$6',
        // letterSpacing: '-.016em',
      },
      '7': {
        fontSize: '$7',
        // letterSpacing: '-.031em',
        // textIndent: '-.005em',
      },
      '8': {
        fontSize: '$8',
        // letterSpacing: '-.034em',
        // textIndent: '-.018em',
      },
      '9': {
        fontSize: '$9',
        // letterSpacing: '-.055em',
        // textIndent: '-.025em',
      },
    },
    variant: {
      title: {
        fontSize: '$7',
        fontWeight: '$3',
        lineHeight: '$1',
        '@bp1': {
          fontSize: '$8',
        },
        '@bp2': {
          fontSize: '$9',
        },
      },
      h1: {
        fontSize: '$5',
        fontWeight: '$2',
        lineHeight: '$2',
        '@bp1': {
          fontSize: '$6',
        },
        '@bp2': {
          fontSize: '$7',
        },
      },
      h2: {
        fontSize: '$5',
        fontWeight: '$2',
        lineHeight: '$2',
      },
      h3: {
        fontSize: '$4',
        fontWeight: '$2',
        lineHeight: '$2',
      },
      paragraph: {
        fontSize: '$4',
        fontWeight: '$1',
        lineHeight: '$3',
      },
      subtext: {
        fontSize: '$3',
        fontWeight: '$1',
        lineHeight: '$3',
      },
    },
    case: {
      uppercase: {
        textTransform: 'uppercase',
      },
      lowercase: {
        textTransform: 'lowercase',
      },
      capitalize: {
        textTransform: 'capitalize',
      },
      inherit: {
        textTransform: 'inherit',
      },
    },
    weight: {
      1: {
        fontWeight: '$1',
      },
      2: {
        fontWeight: '$2',
      },
      3: {
        fontWeight: '$3',
      },
    },
    my: {
      0: { my: 0 },
      1: { my: '$1' },
      2: { my: '$2' },
      3: { my: '$3' },
      4: { my: '$4' },
    },
    gradient: {
      true: {
        gradientText: 'to right, $secondary11, $accent11',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
