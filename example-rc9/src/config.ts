import { read } from 'rc9'

type Profile = {
  up: boolean
  db: {
    hostname: string
    username: string
    database: string
  }
}

export const profile = process.env.PROFILE || 'local'

export const config = read<Profile>(`config/${profile}.conf`)
