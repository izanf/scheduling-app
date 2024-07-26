import { MdLocationPin, MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { cutBigString } from 'Scheduling/utils'
import { Box, Text } from 'components'
import { TalkTheme, SlotWrapper } from './SlotCard.styles'
import { LOCATIONS_COLOR } from 'config/constants'

interface SlotCardProps {
  id: string
  summary: string
  description?: string
  location: string
  favorites: string[]
  setFavorites: React.Dispatch<React.SetStateAction<string[]>> 
}

const SlotCard = ({ id, summary: speaker, description, location, favorites, setFavorites }: SlotCardProps) => {


  const toggleFavorite = (id: string) => {
    setFavorites((prevFav): any => {

      if (prevFav.includes(id)) {
        return prevFav.filter(favId => favId !== id)
      } else {
        return [...prevFav, id]
      }
    })
  }

  const isFavorite = (id: string): any => {
    return favorites.includes(id) ? <MdFavorite style={{ color: 'red' }}/> : <MdFavoriteBorder />
  }

  const [title, theme, desc] = (description ?? '').split(' | ') ?? []

  const getLocationColor = (location: string) =>
    LOCATIONS_COLOR[location] ?? LOCATIONS_COLOR.default

  return (
    <SlotWrapper display="flex" flexDirection="column" type={theme} location={location}>
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
          <Box mb=".5rem" flex="1">
            <Text color="grey" sizing="sm">{cutBigString(desc, 50)}</Text>
          </Box>
        </>
      )}
      {location?.length && (
        <Box display="flex" justifyContent="space-between" alignItems='center'>
          <Box display="flex" alignItems="center">
            <Text color={getLocationColor(location)}><MdLocationPin /></Text>
            <Text color="grey" sizing="sm">{location}</Text>
          </Box>
          <Box onClick={() => toggleFavorite(id)} style={{ cursor: 'pointer' }}>
            {isFavorite(id)}
          </Box>
        </Box>
      )}
    </SlotWrapper>
  )
}

export default SlotCard
