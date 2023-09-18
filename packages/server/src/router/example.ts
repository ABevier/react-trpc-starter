import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import dbClient from "../prisma";

const ExampleRouter = router({
  exampleWithArgs: publicProcedure
    .input(
      z.object({
        message: z.string(),
      })
    )
    .mutation((req) => {
      console.log("exampleWithArgs was called!")
      return { info: "hello " + req.input.message };
    }),

  example: publicProcedure.query(async ({ ctx }) => {
    console.log("query was called!")

    try {
      const result = await dbClient.example.findUnique({where: { id: 1 }});
      return { info: result?.value ?? 'no value' };
    } catch(e) {
      console.error(e);
      return { info: 'no db' };
    }
  }),
});

export default ExampleRouter;
