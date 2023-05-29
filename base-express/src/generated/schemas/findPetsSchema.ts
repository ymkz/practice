import z from 'zod'
import { errorSchema } from './errorSchema'
import { petSchema } from './petSchema'

export const findPetsQueryParamsSchema = z.object({
  tags: z.array(z.string()).optional(),
  limit: z.number().optional(),
})

/**
 * @description unexpected error
 */
export const findPets400Schema = z.lazy(() => errorSchema)

/**
 * @description unexpected error
 */
export const findPets500Schema = z.lazy(() => errorSchema)

/**
 * @description pet response
 */
export const findPetsResponseSchema = z.array(z.lazy(() => petSchema))
