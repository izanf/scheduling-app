import { MdLocationPin } from 'react-icons/md'

import { cutBigString } from 'Scheduling/utils'

import { Box, Text } from 'components'

import { TalkTheme, SlotWrapper } from './SlotCard.styles'
import { LOCATIONS_COLOR } from 'config/constants'

interface SlotCardProps {
  summary: string,
  description?: string,
  location: string
}

const SlotCard = ({ summary: speaker, description, location }: SlotCardProps) => {
  const [title, theme, desc] = (description ?? '').split(' | ') ?? []

  const getLocationColor = (location: string) =>
    LOCATIONS_COLOR[location] ?? LOCATIONS_COLOR.default

  return (
    <SlotWrapper type={theme} location={location}>
      {!title ? (
        <Box mb=".5rem">
          <Text as="h1" color="grey"># {speaker}</Text>
        </Box>
      ) : (
        <>
          <Box display="flex" alignItems="flex-start" mb=".5rem">
            <Box mr=".5rem">
              <Text as="h1">{title}</Text>
            </Box>
            <TalkTheme type={theme}>{theme}</TalkTheme>
          </Box>
          <Box mb=".5rem">
            <Text color="grey" as="h2" sizing="sm">{speaker}</Text>
          </Box>
          <Box mb=".5rem">
            <Text color="grey" sizing="sm">{cutBigString(desc, 50)}</Text>
          </Box>
        </>
      )}
      {location?.length && (
        <Box display="flex" alignItems="center">
          <Text color={getLocationColor(location)}><MdLocationPin /></Text>
          <Text color="grey" sizing="sm">{location}</Text>
        </Box>
      )}
    </SlotWrapper>
  )
}

export default SlotCard
