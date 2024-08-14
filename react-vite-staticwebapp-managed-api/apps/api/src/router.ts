import { publicProcedure, t } from "./trpc";

export const appRouter = t.router({
  greet: publicProcedure
    .query(({ input, ctx }) => {
      console.log(ctx.request.params);

      ctx.context.log('HTTP trigger function processed a request.');
      ctx.context.log('invocationId: ', ctx.context.invocationId);

      return {
        greeting: `Hello, Azure Functions + tRPC!`,
      };
    }),
});

export type AppRouter = typeof appRouter;