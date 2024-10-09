// src/app/database/database.ts
import { addRxPlugin, createRxDatabase } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import {
  clientDbEventSchema,
  eventCollectionMethods,
  eventDocMethods,
} from "@/app/studio/event/database/model";
import {
  ClientDatabaseType,
  DatabaseCollectionsType,
} from "@/app/database/database-schema";
import relationships from "dexie-relationships";

export async function initDatabase() {
  const database: ClientDatabaseType =
    await createRxDatabase<DatabaseCollectionsType>({
      name: "db",
      storage: getRxStorageDexie({
        addons: [relationships],
      }),
    });

  if (process.env.NODE_ENV !== "production") {
    await import("rxdb/plugins/dev-mode").then((module) =>
      addRxPlugin(module.RxDBDevModePlugin),
    );
  }

  await database.addCollections({
    events: {
      schema: clientDbEventSchema,
      methods: eventDocMethods,
      statics: eventCollectionMethods,
    },
  });

  return database;
}
