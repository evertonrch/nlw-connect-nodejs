import { redis } from "../redis/client"

interface GetSubscriberRankinkPositionParams {
  subscriberId: string
}

export async function getSubscriberRankinkPosition({
  subscriberId,
}: GetSubscriberRankinkPositionParams) {
  const rank = await redis.zrevrank("referral:ranking", subscriberId)

  if (rank === null) {
    return { position: null }
  }

  return { position: rank + 1 }
}
