import styled from 'styled-components'
import { lighten } from 'polished'

import { TYPE_TALK_COLOR } from 'config/constants'

import { Text } from 'components'

export const TalkTheme = styled(Text).attrs({ sizing: 'sm' })<{ type: string }>(({ theme, type }) => `
  background: ${theme.colors[TYPE_TALK_COLOR[type]]};
  color: ${lighten(0.2, theme.colors[TYPE_TALK_COLOR[type] + 'Light'])};
  padding: ${theme.sizing.xxsm} ${theme.sizing.xsm};
  border-radius: ${theme.sizing.xxsm};
  text-align: center;
`)
