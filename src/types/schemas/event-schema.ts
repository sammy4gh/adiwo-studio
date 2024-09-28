import { z } from "zod";
import { DateTime } from "luxon";

export const eventSchema = z.object({
  title: z.string().trim(),
  startDate: z.date(),
  endDate: z.date(),
  description: z.string().optional(),
});

export type EventFormType = z.infer<typeof eventSchema>;
