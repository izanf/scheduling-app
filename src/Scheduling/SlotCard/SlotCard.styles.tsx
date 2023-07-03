import styled from 'styled-components'
import { lighten } from 'polished'

import { TYPE_TALK_COLOR } from 'config/constants'

import { Box, Text } from 'components'

export const TalkTheme = styled(Text).attrs({ sizing: 'sm' })<{ type: string }>(({ theme, type }) => `
  background: ${theme.colors[TYPE_TALK_COLOR[type] ?? TYPE_TALK_COLOR['default']]};
  color: ${lighten(0.2, theme.colors[(TYPE_TALK_COLOR[type]
     ?? TYPE_TALK_COLOR['default']) + 'Light'])};
  padding: ${theme.sizing.xxsm} ${theme.sizing.xsm};
  border-radius: ${theme.sizing.xxsm};
  text-align: center;
  white-space: nowrap;
`)

export const SlotWrapper = styled(Box)<{ location: string }>`
  grid-area: ${({ location = '' }) => location.split(' ').slice(-1).join().toLowerCase()};
`
