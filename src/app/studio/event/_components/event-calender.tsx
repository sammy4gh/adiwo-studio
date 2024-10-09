"use client";
import React from "react";
import { EventProps, luxonLocalizer, View, Views } from "react-big-calendar";
import { DateTime } from "luxon";
import { useAppSearchParams } from "@/app/hooks/use-app-search-params";
import FloatingButton from "@/components/floating-button";
import { EventDrawer } from "@/app/studio/event/_components/event-drawer";
import ShadcnBigCalendar from "@/components/shardcn-big-calender/shadcn-big-calendar";
import { useQueryState } from "nuqs";
import { api } from "@/trpc/react";

export default function EventCalender() {
  const [eventId, setEventId] = useQueryState("eventId");
  const [milestoneId, setMilestoneId] = useQueryState("milestoneId");
  const [view, setView] = useQueryState("view");
  const localizer = luxonLocalizer(DateTime);
  const defaultDate = DateTime.local().toJSDate();
  const { setSearchParam, searchParams } = useAppSearchParams();

  //const allEvents = api.event.all.useQuery();

  return (
    <div className="h-screen">
      <ShadcnBigCalendar
        key={searchParams.toString()}
        localizer={localizer}
        defaultDate={defaultDate}
        defaultView={(view as View) || Views.WEEK}
        views={[
          Views.MONTH,
          Views.WEEK,
          Views.WORK_WEEK,
          Views.DAY,
          Views.AGENDA,
        ]}
        step={60}
        onView={setView}
        events={events}
      />
      <FloatingButton
        onClick={() => setEventId("undefined")}
        variant={"default"}
      />
      <EventDrawer
        isOpen={!!eventId}
        setIsOpen={(open) => {
          if (!open) {
            setEventId(null);
          }
        }}
      />
      <EventDrawer
        isOpen={!!milestoneId}
        setIsOpen={(open) => {
          if (!open) {
            setMilestoneId(null);
          }
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
