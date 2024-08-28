import request from "supertest";
import app from "../app";

test("integration sample", async () => {
  const result = await request(app).get("/");

  expect(result.status).toBe(200);
  expect(result.text).toBe("Bill reader");
});
