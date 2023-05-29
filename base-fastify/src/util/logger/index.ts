import dayjs from 'dayjs'
import { pino } from 'pino'

export const logger = pino({
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
  redact: {
    paths: ['req.hostname', 'req.remoteAddress', 'req.remotePort'],
    remove: true,
  },
})
