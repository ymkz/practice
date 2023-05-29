import z from 'zod'
export const errorSchema = z.object({ code: z.number(), message: z.string() })
