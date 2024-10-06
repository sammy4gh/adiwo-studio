import { RxCollection, RxDatabase, RxDocument } from "rxdb";
import { EventSchemaType } from "@/types/schemas/event-schema";

export type EventDocType = EventSchemaType & { id: string };

export type EventDocMethodsType = {
  // custom methods
  eventTitle: (name: string) => string;
};

export type EventDocument = RxDocument<EventDocType, EventDocMethodsType>;

export type EventCollectionMethods = {
  countAllDocuments: () => Promise<number>;
};
export type EventCollectionType = RxCollection<
  Event,
  EventDocMethodsType,
  EventCollectionMethods
>;

export type DatabaseCollectionsType = {
  events: EventCollectionType;
};

export type ClientDatabaseType = RxDatabase<DatabaseCollectionsType>;
