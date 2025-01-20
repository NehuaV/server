import { describe, expect, it } from "bun:test";
import { treaty } from "@elysiajs/eden";
import { server } from "@/index";

const s = treaty(server);

describe("Elysia", () => {
  it("return a response", async () => {
    const { data, error } = await s.api.helloworld.get();

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
