import React, { Suspense } from "react";
import EventCalender from "@/app/studio/event/_components/event-calender";
import { database } from "@/app/database/database";
import { Provider } from "rxdb-hooks";

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventCalender />
    </Suspense>
  );
}

export default Page;
