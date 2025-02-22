import type { FastifyPluginAsync } from "fastify"
import z from "zod"
import { getSubscriberRankinkPosition } from "../functions/get-subscriber-ranking-position"

const paramsSchema = z.object({
  subscriberId: z.string(),
})

export const getSubscriberRankingPositionRoute: FastifyPluginAsync =
  async app => {
    app.get(
      "/subscribers/:subscriberId/ranking/position",
      {
        schema: {
          summary: "Get subscriber ranking position",
          tags: ["referral"],
          params: paramsSchema,
          response: {
            200: z.object({
              position: z.number().nullable(),
            }),
          },
        },
      },
      async request => {
        const { subscriberId } = paramsSchema.parse(request.params)

        const { position } = await getSubscriberRankinkPosition({
          subscriberId,
        })

        return { position }
      }
    )
  }
