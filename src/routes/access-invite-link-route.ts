import type { FastifyPluginAsync } from "fastify"
import z from "zod"
import { env } from "../env"
import { accessInviteLink } from "../functions/access-invite-link"

const paramsSchema = z.object({
  subscriberId: z.string(),
})

export const accessInviteLinkRoute: FastifyPluginAsync = async app => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        summary: "Access invite link and redirects user",
        tags: ["referral"],
        params: paramsSchema,
      },
    },
    async (request, reply) => {
      const { subscriberId } = paramsSchema.parse(request.params)

      await accessInviteLink({ subscriberId })

      const redirectUrl = new URL(env.WEB_URL)
      redirectUrl.searchParams.set("referrer", subscriberId)

      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}
