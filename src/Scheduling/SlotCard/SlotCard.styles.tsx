import styled from 'styled-components'
import { lighten } from 'polished'

import { TYPE_TALK_COLOR } from 'config/constants'

import { Box, Text } from 'components'

export const SlotWrapper = styled(Box)<{ location: string, type?: string }>`
  grid-area: ${({ location = '' }) => location.split(' ').slice(-1).join().toLowerCase()};
  padding: 1rem;
  border-radius: .5rem;
  transition: all ease-in-out .2s;
  border: 2px solid transparent;
  position: relative;

  &:hover {
    ${({ theme, type }) => type ? `border-color: ${theme.colors[TYPE_TALK_COLOR[type]]};` : ''}
  }
`

export const TalkTheme = styled(Text).attrs({ sizing: 'sm' })<{ type: string }>(({ theme, type }) => `
  background: ${theme.colors[TYPE_TALK_COLOR[type] ?? TYPE_TALK_COLOR['default']]};
  color: ${lighten(0.2, theme.colors[(TYPE_TALK_COLOR[type]
     ?? TYPE_TALK_COLOR['default']) + 'Light'])};
  padding: ${theme.sizing.xxsm} ${theme.sizing.xsm};
  border-radius: ${theme.sizing.xxsm};
  text-align: center;
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.sm}px) {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
`)