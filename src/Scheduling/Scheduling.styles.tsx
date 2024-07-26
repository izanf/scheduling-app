import styled from 'styled-components'

import { Box, Text } from 'components'

import { LOCATIONS_COLOR } from 'config/constants'

export const TimeTable = styled(Box)`
  border-left: 4px solid ${({ theme }) => theme.colors.blue};
  padding-left: 1rem;
  margin-left: 3.5rem;
  padding: 0 1rem;
`

export const SlotsHour = styled(Box)`
  position: relative;

  &:before {
    display: block;
    position: absolute;
    margin-left: -1.63rem;
    margin-top: 1rem;
    content: '';
    width: 1rem;
    height: 1rem;
    background: ${({ theme }) => theme.colors.blue};
    border-radius: 100%;
  }
`

export const Time = styled(Text)`
  position: absolute;
  left: -4.2rem;
  top: 1.1rem;
`

export const Slots = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "${Object.keys(LOCATIONS_COLOR).slice(0, -1).map(location => location.toLowerCase().split(' ').slice(-1)).join('"\n"')}";

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "${Object.keys(LOCATIONS_COLOR).slice(0, -1).map(location => location.toLowerCase().split(' ').slice(-1)).join(' ')}";
  }
`
