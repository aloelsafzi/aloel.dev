import { format } from 'date-fns'

const DateFormatter = (dateString) => {
  return format(dateString, 'dd/MMMM/yyyy')
}

export default DateFormatter