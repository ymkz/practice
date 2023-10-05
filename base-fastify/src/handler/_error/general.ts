import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify'

import { AppError } from '~/domain/error'
import { logger } from '~/util/log'
import { incrementErrorCount, incrementWarnCount } from '~/util/metric'

export const generalErrorHandler = (
  error: FastifyError,
  _: FastifyRequest,
  reply: FastifyReply,
) => {
  // リクエストスキーマのバリデーションエラーの場合
  if (error.code === 'FST_ERR_VALIDATION') {
    incrementWarnCount('handler.validation')
    logger.warn(error)
    return reply.status(error.statusCode ?? 400).send(error.message)
  }

  // アプリケーション側で定義したカスタムエラーの場合
  if (error instanceof AppError) {
    // TODO: このままだと日本語のエラーメッセージがそのまま
    incrementErrorCount(error.message)
    logger.error(error)
    return reply.status(error.statusCode).send(error.message)
  }

  // それ以外の予期しないエラーの場合
  incrementErrorCount()
  logger.error(error, '予期しないエラーが発生しました')
  return reply
    .status(error.statusCode ?? 500)
    .send('予期しないエラーが発生しました')
}
