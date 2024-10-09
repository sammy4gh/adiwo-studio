import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { eventSchema } from "@/types/schemas/event-schema";
import { database } from "@/app/database/database";

export const eventRouter = createTRPCRouter({
  all: publicProcedure.query(async () => {
    return await database.event.find().exec();
  }),
  create: publicProcedure.input(eventSchema).mutation(async ({ input }) => {
    console.log("create event mutation", input);
    try {
      const event = await database.event.insert(input);
      console.log("event", event);
    } catch (e) {
      throw new Error((e as Error).message);
    }
  }),
});
