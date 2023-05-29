import supertest from 'supertest'
import { metricsServer } from './metrics'

describe('metricsServer', () => {
  test('/metrics', async () => {
    // Arrange
    const request = supertest(metricsServer)

    // Act
    const response = await request.get('/metrics')

    // Assert
    expect(response.status).toBe(200)
  })
})
