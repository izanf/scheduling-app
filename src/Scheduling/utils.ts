import { CalendarDayType } from 'Scheduling/types'

type GroupedItems = {
  dateTime: string,
  items: CalendarDayType[]
}

/**
 * Cut big string according max quantity of words
 * 
 * @param {string} str
 * @param {number} wordsQuantity
 * @returns {string}
 */
export const cutBigString = (str: string, wordsQuantity: number): string => {
  const splittedString = (str ?? '').split(' ')

  if (splittedString.length > wordsQuantity) {
    return splittedString.slice(0, wordsQuantity).join(' ') + '...'
  }

  return str
}

/** 
 * Filter items by start dateTime and create groupName as the dateTime
 * 
 * @param {Array} items
 * @returns {Array {dateTime: string, items: Array}}
 * 
*/
export const groupByDatetime = (items: CalendarDayType[]): GroupedItems[] => {
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

/**
 * Sort CalendarDayType by LOCATION order 
*/
export const sortByLocationOrder = (items: any) => {
  return items.sort
}