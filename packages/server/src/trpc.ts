import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import type { CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda';
import type { APIGatewayProxyEvent } from 'aws-lambda';

export function createContext({
  event,
  context,
}: CreateAWSLambdaContextOptions<APIGatewayProxyEvent>) {
  return {
    event: event,
    apiVersion: (event as { version?: string }).version ?? '1.0',
    user: event.headers['x-user'],
  };
}
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();
const router = t.router;
const publicProcedure = t.procedure;
const mergeRouters = t.mergeRouters;

export { t, router, publicProcedure, mergeRouters };
export type { Context };
