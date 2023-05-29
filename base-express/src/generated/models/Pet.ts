import type { NewPet } from './NewPet'

export type Pet = any &
  (NewPet & {
    /**
     * @type integer int64
     */
    id: number
  })
