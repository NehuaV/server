import type { App } from "@/app";

export const helloworldService = (app: App) =>
  app.get("/helloworld", () => {
    return {
      message: "Hello World",
      status: "success",
      data: {
        name: "John Doe",
        age: 20,
      },
    };
  });
