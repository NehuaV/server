import { describe, expect, it } from "bun:test";
import { treaty } from "@elysiajs/eden";
import { app } from "@/app";

const server = treaty(app);

describe("Elysia", () => {
  it("return a response", async () => {
    const { data, error } = await server.api.helloworld.get();

    expect(data).toEqual({
      message: "Hello World",
      status: "success",
      data: {
        name: "John Doe",
        age: 20,
      },
    });
  });
});
