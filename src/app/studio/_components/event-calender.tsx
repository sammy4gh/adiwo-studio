"use client";
import React, { Fragment, useMemo, useState } from "react";
import { Calendar, luxonLocalizer, View, Views } from "react-big-calendar";
import { DateTime } from "luxon";
import { useSearchParams } from "next/navigation";
import { useAppSearchParams } from "@/app/hooks/use-app-search-params";

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
        key={searchParams.toString()}
        localizer={localizer}
        defaultDate={defaultDate}
        defaultView={searchParams.get("view") as View}
        views={[
          Views.MONTH,
          Views.WEEK,
          Views.WORK_WEEK,
          Views.DAY,
          Views.AGENDA,
        ]}
        step={60}
        onView={onView}
      />
    </div>
  );
}
