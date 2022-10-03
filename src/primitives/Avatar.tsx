import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styled } from '../../stitches.config'

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '$7',
  height: '$7',
  borderRadius: '100%',
  backgroundColor: '$primary3',
})

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$secondary9',
  color: '$primary1',
  fontSize: '$3',
  lineHeight: '$1',
  fontWeight: 500,
})

// Exports
export const AvatarRoot = StyledAvatar
export const AvatarImage = StyledImage
export const AvatarFallback = StyledFallback

export const Avatar = ({
  image,
  fallback,
}: {
  image: string
  fallback: string
}) => (
  <AvatarRoot>
    <AvatarImage src={image} alt={`Avatar of ${fallback}`} />
    <AvatarFallback delayMs={600}>{fallback}</AvatarFallback>
  </AvatarRoot>
)
