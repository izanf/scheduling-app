import useScheduling from './useScheduling'

import { HourType } from './types'

import { Box } from 'components'

import DayHours from './DayHours'

const Scheduling = () => {
  const { calendar } = useScheduling()

  return (
    <Box>
      {calendar.map((dayHoursEvents: HourType) => (
        <DayHours key={dayHoursEvents.dateTime} data={dayHoursEvents.items} />
      ))}
    </Box>
  )
}

export default Scheduling
