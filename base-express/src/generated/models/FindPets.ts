import type { Error } from './Error'
import type { Pet } from './Pet'

export type FindPetsQueryParams = {
  /**
   * @type array | undefined
   */
  tags?: string[] | undefined
  /**
   * @type integer | undefined int32
   */
  limit?: number | undefined
}

/**
 * @description unexpected error
 */
export type FindPets400 = Error

/**
 * @description unexpected error
 */
export type FindPets500 = Error

/**
 * @description pet response
 */
export type FindPetsResponse = Pet[]
