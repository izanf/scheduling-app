import { useEffect, useRef, useState } from 'react'
import { getCalendar } from 'services/google-calendar'
import { groupByDatetime } from './utils'
import { HourType } from './types'

const useScheduling = () => {  
  const [calendar, setCalendar] = useState<HourType[]>([])
  const calendarRequestRef = useRef(true)

  useEffect(() => {
    if (!calendarRequestRef.current) return
    calendarRequestRef.current = false
    
    const getCalendarr = async () => {
      const { items } = await getCalendar()

      setCalendar(groupByDatetime(items))
    }

    getCalendarr()
  }, [])

  return {
    calendar
  }
}

export default useScheduling
