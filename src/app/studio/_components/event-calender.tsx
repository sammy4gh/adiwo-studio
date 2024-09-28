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
import FloatingButton from "@/components/floating-button";
import { EventDrawer } from "@/app/studio/event/_components/event-drawer";
import ShadcnBigCalendar from "@/components/shardcn-big-calender/shadcn-big-calendar";

export default function EventCalender() {
  const localizer = luxonLocalizer(DateTime);
  const defaultDate = DateTime.local().toJSDate();
  const { setSearchParam, searchParams } = useAppSearchParams();
  const onView = (view: View) => {
    setSearchParam({ view: view });
  };

  const onFloatingButtonClick = () => {
    setSearchParam({ eventId: "0" });
  };

  return (
    <div className="h-screen">
      <ShadcnBigCalendar
        key={searchParams.toString()}
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
        events={events}
      />
      <FloatingButton onClick={onFloatingButtonClick} />
      <EventDrawer
        isOpen={searchParams.get("eventId") === "0"}
        setIsOpen={(open) => {
          setSearchParam({ eventId: open ? "0" : null });
        }}
      />
    </div>
  );
}

const events: EventProps["event"][] = [
  {
    title: "Introduction to Programming",
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
