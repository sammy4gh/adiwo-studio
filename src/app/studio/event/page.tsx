import EventCalender from "@/app/studio/event/_components/event-calender"
import React, { Suspense } from "react"

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EventCalender />
    </Suspense>
  )
}

export default Page
