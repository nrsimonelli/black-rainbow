import React from 'react'
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from '@radix-ui/react-icons'
import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import { styled } from '../../stitches.config'

const StyledToolbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  padding: '$2',
  width: '$full',
  minWidth: 'max-content',
  borderRadius: '$2',
  bg: '$lv2',
  boxShadow: '$2',
  mb: '$2',
})

const itemStyles = {
  all: 'unset',
  flex: '0 0 auto',
  color: '$primary11',
  height: 25,
  padding: '0 5px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: '$2',
  lineHeight: '$1',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': { bg: '$secondary3', color: '$secondary11' },
  '&:focus': {
    position: 'relative',
    boxShadow: `0 0 0 2px $colors$secondary7`,
  },
}

const StyledButton = styled(ToolbarPrimitive.Button, {
  ...itemStyles,
  px: '$2',
  color: 'white',
  bg: '$secondary9',
  '&:hover': { color: 'white', bg: '$secondary10' },
})

const StyledLink = styled(
  ToolbarPrimitive.Link,
  {
    ...itemStyles,
    bg: 'transparent',
    color: '$primary11',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  { '&:hover': { bg: 'transparent', cursor: 'pointer' } }
)
const StyledSeparator = styled(ToolbarPrimitive.Separator, {
  width: 1,
  bg: '$primary6',
  mx: '$2',
})

const StyledToggleGroup = styled(ToolbarPrimitive.ToggleGroup, {
  display: 'inline-flex',
  borderRadius: 4,
})

const StyledToggleItem = styled(ToolbarPrimitive.ToggleItem, {
  ...itemStyles,
  boxShadow: 0,
  bg: '$lv2',
  marginLeft: 2,
  '&:first-child': { marginLeft: 0 },
  '&[data-state=on]': {
    bg: '$secondary5',
    color: '$secondary11',
  },
})

// Exports
export const Toolbar = StyledToolbar
export const ToolbarButton = StyledButton
export const ToolbarSeparator = StyledSeparator
export const ToolbarLink = StyledLink
export const ToolbarToggleGroup = StyledToggleGroup
export const ToolbarToggleItem = StyledToggleItem

const ToolbarDemo = () => (
  <Toolbar aria-label='Formatting options'>
    <ToolbarToggleGroup type='multiple' aria-label='Text formatting'>
      <ToolbarToggleItem value='bold' aria-label='Bold'>
        <FontBoldIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value='italic' aria-label='Italic'>
        <FontItalicIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value='strikethrough' aria-label='Strike through'>
        <StrikethroughIcon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarToggleGroup
      type='single'
      defaultValue='center'
      aria-label='Text alignment'
    >
      <ToolbarToggleItem value='left' aria-label='Left aligned'>
        <TextAlignLeftIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value='center' aria-label='Center aligned'>
        <TextAlignCenterIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value='right' aria-label='Right aligned'>
        <TextAlignRightIcon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarLink href='#' target='_blank' css={{ marginRight: 10 }}>
      Edited 2 hours ago
    </ToolbarLink>
    <ToolbarButton css={{ marginLeft: 'auto' }}>Share</ToolbarButton>
  </Toolbar>
)

export default ToolbarDemo
