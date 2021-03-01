import app from '../../src/app'
import request from 'supertest'
import { createConnections, getConnection } from 'typeorm'

beforeAll(async () => {
  await createConnections()
})

afterAll(async () => {
  const defaultConnection = getConnection()
  await defaultConnection.close()
})

describe("First test", () => {
  test("Check route with status 200", async () => {
    const result = await request(app).get("/tools");
    expect(result.status).toEqual(200);
  });
});
