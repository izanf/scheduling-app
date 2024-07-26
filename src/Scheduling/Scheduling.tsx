import useScheduling from './useScheduling'

import { useState } from 'react'
import { HourType } from './types'

import { formatTime } from 'utils'

import { Box } from 'components'
import { SlotsHour, TimeTable, Time, Slots } from './Scheduling.styles'
import SlotCard from './SlotCard/SlotCard'

const Scheduling = () => {
  const { isLoading: calendarLoading, calendar } = useScheduling()
  const [favorites, setFavorites] = useState<string[]>([]);

  if (calendarLoading) return <Box>Carregando...</Box>

  return (
    <TimeTable>
      {calendar.map((dayHoursEvents: HourType) => (
        <SlotsHour key={dayHoursEvents.dateTime}>
          <Time as="h2" sizing="sm" color="grey">{formatTime(dayHoursEvents.dateTime)}</Time>
          <Slots>
            {dayHoursEvents.items.map(({ id, summary, description, location }) => (
              <SlotCard key={id} {...{ id, summary, description, location , favorites, setFavorites}} />
            ))}
          </Slots>
        </SlotsHour>
      ))}
    </TimeTable>
  )
}

export default Scheduling
