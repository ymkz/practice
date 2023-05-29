import type { Error } from './Error'

/**
 * @description pet deleted
 */
export type DeletePet204 = any | null

export type DeletePetPathParams = {
  /**
   * @type integer int64
   */
  id: number
}

export type DeletePetRequest = any | null

export type DeletePetResponse = any | null

/**
 * @description unexpected error
 */
export type DeletePet400 = Error

/**
 * @description unexpected error
 */
export type DeletePet500 = Error
