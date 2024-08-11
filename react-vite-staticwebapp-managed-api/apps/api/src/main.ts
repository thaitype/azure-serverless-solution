import { app } from "@azure/functions";

export const hello = app.http("hello", {
  methods: ["GET", "POST"],
  authLevel: "function",
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get("name") || (await request.text()) || "world";

    return { jsonBody: {
      message: `Hello, ${name}! from Azure Functions API`,
    } };
  },
});
