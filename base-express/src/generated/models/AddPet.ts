import type { Error } from './Error'
import type { NewPet } from './NewPet'
import type { Pet } from './Pet'

/**
 * @description unexpected error
 */
export type AddPet400 = Error

/**
 * @description unexpected error
 */
export type AddPet500 = Error

/**
 * @description Pet to add to the store
 */
export type AddPetRequest = NewPet

/**
 * @description pet response
 */
export type AddPetResponse = Pet
