const API_URL = 'https://www.googleapis.com/calendar/v3/calendars/'
import { CALENDAR_ID, API_KEY } from "config/constants"

export const getCalendar = async (): Promise<any> => {
  const response = await fetch(`${API_URL + CALENDAR_ID}/events?key=${API_KEY}`).then(res => res.json())

  return response
}
