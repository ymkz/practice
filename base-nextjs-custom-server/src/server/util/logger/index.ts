import dayjs from 'dayjs'
import { LoggerOptions, pino } from 'pino'

const options: LoggerOptions = {
  enabled: process.env.NODE_ENV !== 'test',
  timestamp: () => {
    return `,"timestamp":"${dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS')}"`
  },
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() }
    },
    bindings: () => {
      return {}
    },
  },
}

export const logger =
  process.env.NODE_ENV === 'production'
    ? pino({ ...options })
    : pino({ ...options, transport: { target: 'pino-pretty' } })
