import { CalendarDayType } from '../types'

type GroupedItems = {
  dateTime: string,
  items: CalendarDayType[]
}

/** 
 * Filter items by start dateTime and create groupName as the dateTime
 * 
 * @param {Array} items
 * @returns {Array {dateTime: string, items: Array}}
 * 
*/
const groupByDatetime = (items: CalendarDayType[]): GroupedItems[] => {
  const groups: { [key: string]: CalendarDayType[] } = {}

  items.forEach((item: CalendarDayType) => {
    const { dateTime } = item.start
    if (groups[dateTime]) {
      groups[dateTime].push(item)
    } else {
      groups[dateTime] = [item]
    }
  })

  return Object.keys(groups).map(key => ({
    dateTime: key,
    items: groups[key]
  }))
}

export default groupByDatetime
