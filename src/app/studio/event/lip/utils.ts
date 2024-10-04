//return next milestone date based on previous milestone date and milestone preset

import { MilestonePresetsSchemaType } from "@/types/schemas/event-schema";
import { DateTime } from "luxon";

export const nextMilestoneDate = (
  preset: MilestonePresetsSchemaType,
  previousDate?: Date,
): Date | undefined => {
  if (!previousDate) return undefined;
  //make a luxon date object
  const pDate = DateTime.fromJSDate(previousDate);
  //return next milestone date based on preset
  switch (preset) {
    case "daily":
      return pDate.plus({ days: 1 }).toJSDate();
    case "weekly":
      return pDate.plus({ weeks: 1 }).toJSDate();
    case "monthly":
      return pDate.plus({ months: 1 }).toJSDate();
    default:
      return pDate.toJSDate();
  }
};
