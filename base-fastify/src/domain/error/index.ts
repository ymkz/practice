type ErrorArgs = {
  statusCode?: number
  cause?: unknown
}

export class AppError extends Error {
  message: string
  statusCode: number

  static {
    this.prototype.name = 'AppError'
  }

  constructor(message: string, args?: ErrorArgs) {
    super(message, { cause: args?.cause })
    this.message = message
    this.statusCode = args?.statusCode ?? 500
  }
}
