import type { FastifyPluginAsync } from "fastify"
import z from "zod"
import { getSubscriberInviteClicks } from "../functions/get-subscriber-invite-clicks"

const paramsSchema = z.object({
  subscriberId: z.string(),
})

export const getSubscriberInviteClicksRoute: FastifyPluginAsync = async app => {
  app.get(
    "/subscribers/:subscriberId/ranking/clicks",
    {
      schema: {
        summary: "Get subscriber invite clicks count",
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

      const { count } = await getSubscriberInviteClicks({ subscriberId })

      return { count }
    }
  )
}
