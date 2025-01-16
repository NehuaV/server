import { Elysia } from "elysia";

export const helloworldService = new Elysia().get("/api/helloworld", () => {
  return {
    message: "Hello World",
    status: "success",
    data: {
      name: "John Doe",
      age: 20,
    },
  };
});
