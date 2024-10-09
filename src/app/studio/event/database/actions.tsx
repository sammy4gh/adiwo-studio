import { EventSchemaType } from "@/types/schemas/event-schema";
import {
  ClientDatabaseType,
  EventCollectionType,
} from "@/app/database/database-schema";

export const addEvent = async (
  event: EventSchemaType,
  eventCollection: EventCollectionType,
) => {
  return await eventCollection.insert(event);
};

export const getAllEvents = async (eventCollection: EventCollectionType) => {
  return eventCollection.find();
};
