import { Box } from 'components'

import { CalendarDayType } from './types'

interface DayHoursProps {
  data: CalendarDayType[]
}

const DayHours = ({ data }: DayHoursProps) => {
  console.log('daaata', data)

  return (
    <Box>
      Day and Hours
    </Box>
  )
}

export default DayHours
