import z from 'zod'
import { errorSchema } from './errorSchema'
import { newPetSchema } from './newPetSchema'
import { petSchema } from './petSchema'

/**
 * @description unexpected error
 */
export const addPet400Schema = z.lazy(() => errorSchema)

/**
 * @description unexpected error
 */
export const addPet500Schema = z.lazy(() => errorSchema)

/**
 * @description Pet to add to the store
 */
export const addPetRequestSchema = z.lazy(() => newPetSchema)

/**
 * @description pet response
 */
export const addPetResponseSchema = z.lazy(() => petSchema)
