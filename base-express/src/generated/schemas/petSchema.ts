import z from 'zod'
import { newPetSchema } from './newPetSchema'

export const petSchema = z
  .any()
  .and(z.lazy(() => newPetSchema))
  .and(z.object({ id: z.number() }))
