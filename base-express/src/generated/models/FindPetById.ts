import type { Error } from './Error'
import type { Pet } from './Pet'

export type FindPetByIdPathParams = {
  /**
   * @type integer int64
   */
  id: number
}

/**
 * @description unexpected error
 */
export type FindPetById400 = Error

/**
 * @description unexpected error
 */
export type FindPetById500 = Error

/**
 * @description pet response
 */
export type FindPetByIdResponse = Pet
