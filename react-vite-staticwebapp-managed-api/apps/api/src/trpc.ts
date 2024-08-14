import { AzureFunctionsContextOption } from 'trpc-azure-functions-adapter';
import { inferAsyncReturnType, initTRPC } from '@trpc/server';

export function createContext({ context, request }: AzureFunctionsContextOption) {
  return {
    context,
    request,
  };
}

type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.context<Context>().create();

export const publicProcedure = t.procedure;