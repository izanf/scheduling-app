import { format } from 'date-fns'

const formatTime = (date: string) =>
  format(new Date(date), 'hh:mm')

export default formatTime