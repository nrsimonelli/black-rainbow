import React, { useContext } from 'react'
import { styled, darkTheme, MEDIA } from '../../stitches.config'
import { Flex } from '../primitives/Flex'
import defaultSvg from '../assets/default.svg'
import darkSvg from '../assets/dark.svg'
import blurSvg from '../assets/blur.svg'
import lightSvg from '../assets/light.svg'
import { ThemeContext } from './ThemeContext'

export const Grain = ({ children }: { children: JSX.Element[] }) => {
  const { theme } = useContext(ThemeContext)
  const isDarkTheme = theme === darkTheme

  const GrainWrapper = styled(Flex, {
    // backgroundSize: 'cover',
    // objectFit: 'cover',
    minHeight: '100vh',
    backgroundImage: isDarkTheme ? `url(${darkSvg})` : `url(${lightSvg})`,
    // bg: '$lv1',
    // backgroundImage: `url(${blurSvg})`,
    backgroundPositionX: '50%',
    backgroundPositionY: '100%',
    backgroundRepeat: 'no-repeat',
    '@initial': {
      backgroundSize: MEDIA.bp2,
    },
    '@bp1': {
      backgroundSize: MEDIA.bp2,
    },
    '@bp2': {
      backgroundSize: MEDIA.bp4,
    },
    '@bp3': {
      backgroundSize: MEDIA.bp4,
    },
    '@bp4': {
      backgroundSize: MEDIA.bp4,
    },
  })
  return (
    <GrainWrapper direction={'column'} justify={'center'}>
      {children}
    </GrainWrapper>
  )
}
