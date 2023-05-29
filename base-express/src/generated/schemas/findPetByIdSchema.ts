import z from 'zod'
import { errorSchema } from './errorSchema'
import { petSchema } from './petSchema'

export const findPetByIdPathParamsSchema = z.object({ id: z.number() })

/**
 * @description unexpected error
 */
export const findPetById400Schema = z.lazy(() => errorSchema)

/**
 * @description unexpected error
 */
export const findPetById500Schema = z.lazy(() => errorSchema)

/**
 * @description pet response
 */
export const findPetByIdResponseSchema = z.lazy(() => petSchema)
