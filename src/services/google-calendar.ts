import { CALENDAR_ID, API_KEY } from 'config/constants'

import { CalendarDayType } from 'Scheduling/types'

const API_URL = 'https://www.googleapis.com/calendar/v3/calendars/'

export const getCalendar = async (): Promise<{ items: CalendarDayType[] }> => {
  const response = await fetch(`${API_URL + CALENDAR_ID}/events?key=${API_KEY}`)

  const data = response.json()

  return data
}
