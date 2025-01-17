import { t } from "elysia";

export const successResponse = t.Object({
  message: t.String({ default: "Success" }),
  data: t.Any(),
});

export const errorResponse = t.Object({
  error: t.String(),
  message: t.String(),
});

export const commonResponses = {
  200: successResponse,
  401: errorResponse,
  403: errorResponse,
};
