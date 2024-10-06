import {
  ClientDatabaseType,
  DatabaseCollectionsType,
  EventCollectionMethods,
  EventCollectionType,
  EventDocMethodsType,
  EventDocType,
  EventDocument,
} from "@/app/database/database-schema";
import { createRxDatabase, RxJsonSchema } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { EventSchemaType, repeatPresets } from "@/types/schemas/event-schema";
import relationships from "dexie-relationships";

const database: ClientDatabaseType =
  await createRxDatabase<DatabaseCollectionsType>({
    name: "db",
    storage: getRxStorageDexie({
      addons: [relationships],
    }),
  });

//RXDB schema
export const clientDbEventSchema: RxJsonSchema<EventDocType> = {
  title: "event schema",
  version: 0,
  description: "describes a simple event",
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 100,
    },
    title: {
      type: "string",
    },
    startDate: {
      type: "string",
      format: "date-time",
    },
    endDate: {
      type: "string",
      format: "date-time",
    },
    startTime: {
      type: "string",
      format: "date-time",
    },
    endTime: {
      type: "string",
      format: "date-time",
    },
    repeatPresets: {
      type: "string",
      enum: repeatPresets,
    },
    description: {
      type: "string",
    },
    milestonePreset: {
      type: "string",
      enum: repeatPresets,
    },
    milestones: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: {
            type: "string",
          },
          date: {
            type: "string",
            format: "date-time",
          },
          step: {
            type: "number",
          },
          description: {
            type: "string",
          },
          tags: {
            type: "array",
            items: {
              type: "string",
            },
          },
        },
      },
    },
  },
  required: ["title", "startDate", "endDate", "startTime", "endTime"],
};

const eventDocMethods: EventDocMethodsType = {
  eventTitle: function (this: EventDocument, name: string) {
    return this.title;
  },
};
const eventCollectionMethods: EventCollectionMethods = {
  countAllDocuments: async function (this: EventCollectionType) {
    const allDocs = await this.find().exec();
    return allDocs.length;
  },
};

await database.addCollections({
  events: {
    schema: clientDbEventSchema,
    methods: eventDocMethods,
    statics: eventCollectionMethods,
  },
});

//postInsert hook
database.events.postInsert(
  function (
    this: EventCollectionType, // own collection is bound to the scope
    docData: EventDocType, // documents data
    doc: EventDocument, // RxDocument
  ) {
    console.log("insert to " + this.name + "-collection: " + doc.title);
  },
  false, //not async
);

const allEvents = await database.events.find().exec();
