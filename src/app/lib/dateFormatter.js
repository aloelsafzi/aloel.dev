import { format, isValid, parseISO } from 'date-fns'
import { id } from 'date-fns/locale'

const DateFormatter = (dateString) => {
  if (!dateString) return ''
  const parsed = typeof dateString === 'string' ? parseISO(dateString) : new Date(dateString)
  if (!isValid(parsed)) return String(dateString)
  return format(parsed, 'd MMMM yyyy', { locale: id })
}

export default DateFormatter
