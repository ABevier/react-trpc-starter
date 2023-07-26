import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import appRouter from "./router";
import { createContext } from "./trpc";

export type AppRouter = typeof appRouter;

export const handler = awsLambdaRequestHandler({
  router: appRouter,
  createContext,
  responseMeta() {
    return {
      headers: {
        "Access-Control-Allow-Origin": '*', // TODO: restrict this to the domain of your frontend
        "Access-Control-Allow-Methods": "GET,POST",
        "Access-Control-Allow-Headers": "authorization",
      },
    };
  },
});
