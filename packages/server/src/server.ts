import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import appRouter from "./router";
import { createContext } from "./trpc";

export type AppRouter = typeof appRouter;

export const handler = awsLambdaRequestHandler({
  router: appRouter,
  createContext,
});
