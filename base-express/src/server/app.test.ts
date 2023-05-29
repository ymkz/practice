import supertest from 'supertest'
import { appServer } from './app'

describe('appServer', () => {
  test('/healthz', async () => {
    // Arrange
    const request = supertest(appServer)

    // Act
    const response = await request.get('/healthz')

    // Assert
    expect(response.status).toBe(200)
    expect(response.text).toEqual('OK')
  })

  test('/hello', async () => {
    // Arrange
    const request = supertest(appServer)

    // Act
    const response = await request.get('/hello')

    // Assert
    expect(response.status).toBe(200)
    expect(response.text).toEqual('Hello, World')
  })

  test('/not-found', async () => {
    // Arrange
    const request = supertest(appServer)

    // Act
    const response = await request.get('/not-found')

    // Assert
    expect(response.status).toBe(404)
    expect(response.text).toEqual('Not Found')
  })
})
