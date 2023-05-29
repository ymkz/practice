import z from 'zod'
export const newPetSchema = z.object({
  name: z.string(),
  tag: z.string().optional(),
})
