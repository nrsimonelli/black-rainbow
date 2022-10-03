import { useState } from 'react'
import { styled, theme } from '../stitches.config'
import { Box } from './primitives/Box'
import { Button } from './primitives/Button'
import { Container } from './primitives/Container'
import { Flex } from './primitives/Flex'
import { Typeography } from './primitives/Typeography'
import { ThemeToggle } from './components/ThemeContext'
import { globalStyle } from './globalStyle'
import { Grain } from './components/Grain'
import { Avatar } from './primitives/Avatar'
import { Table } from './components/Table'
import { TextField } from './primitives/TextField'

const App = () => {
  globalStyle()

  // const onChange = () =>

  return (
    <>
      <Grain>
        <ThemeToggle />
        <Container variant={'responsive'}>
          <Flex direction={'column'}>
            <Typeography variant={'title'} css={{ color: '$hiContrast' }}>
              BlackRainbow
            </Typeography>
          </Flex>
        </Container>
      </Grain>
      {/* <Typeography variant={'title'} gradient>
        Hello
      </Typeography>
      <Typeography>hello there how are you</Typeography> */}
      {/* <Flex justify={'center'} align={'center'}>
        <Box
          mx={'1'}
          css={{
            height: '$9',
            width: '30%',
            gradientBg: 'to right, $secondary11, $accent11',
          }}
        ></Box>
        <Box
          mx={'1'}
          css={{
            height: '$9',
            width: '30%',
            gradientBg: 'to right, $stop1, $stop2',
          }}
        ></Box>
        <Avatar
          image={'https://kirby.nintendo.com/assets/img/home/kirby-pink.png'}
          fallback={'NS'}
        />
      </Flex> */}
      <Table />
    </>
  )
}

export default App
