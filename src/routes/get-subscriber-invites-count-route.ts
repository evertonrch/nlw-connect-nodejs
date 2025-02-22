import type { FastifyPluginAsync } from "fastify"
import z from "zod"
import { getSubscriberInvitesCount } from "../functions/get-subscriber-invites-count"

const paramsSchema = z.object({
  subscriberId: z.string(),
})

export const getSubscriberInvitesCountRoute: FastifyPluginAsync = async app => {
  app.get(
    "/subscribers/:subscriberId/ranking/count",
    {
      schema: {
        summary: "Get subscriber invites count",
        tags: ["referral"],
        params: paramsSchema,
        response: {
          200: z.object({
            count: z.number(),
          }),
        },
      },
    },
    async request => {
      const { subscriberId } = paramsSchema.parse(request.params)

      const { count } = await getSubscriberInvitesCount({ subscriberId })

      return { count }
    }
  )
}
