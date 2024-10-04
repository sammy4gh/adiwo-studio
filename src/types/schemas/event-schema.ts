import { z } from "zod";
import { DateTime } from "luxon";

export const repeatPresets = [
  "daily",
  "weekly",
  "bi-weekly",
  "monthly",
  "custom",
  "none",
] as const;

export type MilestonePresetsSchemaType = (typeof repeatPresets)[number];
export const milestoneSchema = z.object({
  title: z.string().trim(),
  date: z.date().optional(),
  step: z.number().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type MilestoneSchemaType = z.infer<typeof milestoneSchema>;

export const eventSchema: z.ZodSchema = z.lazy(
  (): z.ZodObject<any> =>
    z.object({
      title: z.string().trim(),
      startDate: z.date().default(DateTime.now().toJSDate()),
      endDate: z.date().default(DateTime.now().toJSDate()),
      startTime: z.date().default(DateTime.now().toJSDate()),
      endTime: z.date().default(DateTime.now().toJSDate()),
      repeatPresets: z.enum(repeatPresets).optional(),
      description: z.string().optional(),
      milestonePreset: z.enum(repeatPresets).default("none"),
      milestones: z.array(z.lazy(() => eventSchema)).optional(),
    }),
);

export type EventSchemaType = z.infer<typeof eventSchema>;
