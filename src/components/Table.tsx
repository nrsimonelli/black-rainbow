import { styled } from '../../stitches.config'
import { Box } from '../primitives/Box'
import { Container } from '../primitives/Container'
import { TextField } from '../primitives/TextField'
import ToolbarDemo, { Toolbar } from '../primitives/Toolbar'

const TableContainer = styled(Container, {
  '@initial': {
    maxWidth: 'none',
  },
  '@bp1': {
    maxWidth: '95vw',
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
})

const TABLE_COLUMNS = {
  RANK: 'rank',
  PLAYER: 'player',
  ELO: 'elo',
  WINS: 'wins',
  LOSSES: 'losses',
}

export const Table = () => {
  return (
    <TableContainer css={{ marginTop: '-10vh' }}>
      <ToolbarDemo />
      <Box
        css={{
          minHeight: '80vh',
          borderRadius: '$2',
          bg: '$lv2',
        }}
      >
        Table Here
      </Box>
      <TextField size={2} variant={'ghost'} state={'valid'} />
    </TableContainer>
  )
}
