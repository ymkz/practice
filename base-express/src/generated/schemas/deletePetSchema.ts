import z from 'zod'
import { errorSchema } from './errorSchema'

/**
 * @description pet deleted
 */
export const deletePet204Schema = z.any()
export const deletePetPathParamsSchema = z.object({ id: z.number() })
export const deletePetRequestSchema = z.any()
export const deletePetResponseSchema = z.any()

/**
 * @description unexpected error
 */
export const deletePet400Schema = z.lazy(() => errorSchema)

/**
 * @description unexpected error
 */
export const deletePet500Schema = z.lazy(() => errorSchema)
