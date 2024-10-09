import { createRxDatabase, RxCollection, RxDatabase, RxDocument } from "rxdb";
import { EventSchemaType } from "@/types/schemas/event-schema";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import relationships from "dexie-relationships";

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
  event: EventCollectionType;
};

export type ClientDatabaseType = RxDatabase<DatabaseCollectionsType>;
