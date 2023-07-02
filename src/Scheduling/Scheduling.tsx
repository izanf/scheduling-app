import useScheduling from './useScheduling'

import { HourType } from './types'

import { Box } from 'components'

import SlotCard from './SlotCard/SlotCard'

const Scheduling = () => {
  const { isLoading: calendarLoading, calendar } = useScheduling()

  if (calendarLoading) return <Box>Carregando...</Box>

  return (
    <Box>
      {calendar.map((dayHoursEvents: HourType) => (
        <Box key={dayHoursEvents.dateTime}>
          {dayHoursEvents.items.map(({ id, summary, description, location }) => (
            <SlotCard key={id} {...{summary, description, location}} />
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default Scheduling
