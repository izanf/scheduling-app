import styled from 'styled-components'
import { typography } from 'styled-system'
import type { TypographyProps } from 'styled-system'

interface TextProps extends TypographyProps, React.HTMLAttributes<HTMLElement> {
  sizing?: string
  color?: string
}

const Text = styled.span<TextProps>`
  ${typography}
  font-size: ${({ theme, sizing = 'md' }) => theme.sizing[sizing]};
  color: ${({ theme, color = 'black' }) => theme.colors[color]};
`

export default Text
