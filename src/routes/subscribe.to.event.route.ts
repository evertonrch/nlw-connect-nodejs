import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    "/subscriptions",
    {
      schema: {
        summary: "Subscribes someone to the event",
        tags: ["Subscription"],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z.object({
            name: z.string(),
            email: z.string(),
          }),
        },
      },
    },
    async (request, response) => {
      const { name, email } = request.body;

      return response.status(201).send({
        name,
        email,
      });
    }
  );
};
