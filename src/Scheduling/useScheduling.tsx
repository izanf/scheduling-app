import { useEffect, useRef, useState } from 'react'

import { getCalendar } from 'services/google-calendar'

import { groupByDatetime } from './utils'

import { HourType } from './types'

const useScheduling = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [calendar, setCalendar] = useState<HourType[]>([])
  const calendarRequestRef = useRef(true)

  useEffect(() => {
    if (!calendarRequestRef.current) return
    calendarRequestRef.current = false
    
    const insertCalendarData = async () => {
      try {
        setIsLoading(true)
  
        const { items } = await getCalendar()
        const sorttedItems = items.sort((a, b) => (a.start.dateTime > b.start.dateTime) ? 1 : -1)
        const grouppedItems = groupByDatetime(sorttedItems)

        setCalendar(grouppedItems)
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message)
        }
      } finally {
        setIsLoading(false)
      }

    }

    insertCalendarData()
  }, [])

  return {
    isLoading,
    calendar
  }
}

export default useScheduling
