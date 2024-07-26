import styled from 'styled-components'
import { layout, flexbox, space, grid, border } from 'styled-system'
import type { LayoutProps, FlexboxProps, SpaceProps, GridProps, BorderProps } from 'styled-system'

interface BoxProps extends LayoutProps, FlexboxProps, SpaceProps, GridProps, BorderProps, React.HTMLAttributes<HTMLElement> {
  background?: string
}

const Box = styled.div<BoxProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${grid}
  ${border}
  background: ${({ theme, background = 'transparent' }) => theme.colors[background]};
`

export default Box
