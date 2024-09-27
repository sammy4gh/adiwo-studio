"use client";
import React, { Fragment, useMemo, useState } from "react";
import {
  Calendar,
  EventProps,
  luxonLocalizer,
  View,
  Views,
} from "react-big-calendar";
import { DateTime } from "luxon";
import { useSearchParams } from "next/navigation";
import { useAppSearchParams } from "@/app/hooks/use-app-search-params";
import CalenderEvent from "@/app/studio/event/_components/calender-event";

export default function EventCalender() {
  const localizer = luxonLocalizer(DateTime);
  const defaultDate = DateTime.local().toJSDate();
  const { setSearchParam, searchParams } = useAppSearchParams();
  const onView = (view: View) => {
    setSearchParam({ view: view });
  };

  return (
    <div className="h-screen">
      <Calendar
        key={searchParams.toString() || ""}
        localizer={localizer}
        defaultDate={defaultDate}
        defaultView={(searchParams.get("view") as View) || Views.WEEK}
        views={[
          Views.MONTH,
          Views.WEEK,
          Views.WORK_WEEK,
          Views.DAY,
          Views.AGENDA,
        ]}
        step={60}
        onView={onView}
        components={{
          event: CalenderEvent,
        }}
        events={events}
      />
    </div>
  );
}

const events: EventProps["event"][] = [
  {
    title: "Event",
    start: DateTime.local().toJSDate(),
    end: DateTime.local().plus({ hour: 3 }).toJSDate(),
  },
  {
    title: "Long Event",
    start: DateTime.local().plus({ days: 5 }).toJSDate(),
    end: DateTime.local().plus({ days: 6 }).toJSDate(),
  },
  {
    title: "Meeting",
    start: DateTime.local().plus({ days: 3 }).toJSDate(),
    end: DateTime.local().plus({ days: 3, hour: 5 }).toJSDate(),
  },
  {
    title: "Conference",
    start: DateTime.local().plus({ days: 1 }).toJSDate(),
    end: DateTime.local().toJSDate(),
  },
];
