import { azureFunctionsRequestHandler } from 'trpc-azure-functions-adapter';
import { appRouter } from './router';
import { createContext } from './trpc';

azureFunctionsRequestHandler({
  router: appRouter,
  createContext,
});