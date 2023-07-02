export type CalendarDayType = {
  kind: string,
  etag: string,
  id: string,
  status: string,
  htmlLink: string,
  created: string,
  updated: string,
  summary: string,
  creator: {
    email: string
  },
  organizer: {
    email: string,
    displayName: string,
    self: boolean
  },
  start: {
    dateTime: string,
    timeZone: string
  },
  end: {
    dateTime: string,
    timeZone: string
  },
  iCalUID: string,
  sequence: number,
  eventType: string
}

export type HourType = {
  dateTime: string,
  items: CalendarDayType[]
}
