"use client";
import React, { Fragment } from "react";
import { Calendar, luxonLocalizer, Views } from "react-big-calendar";
import { DateTime } from "luxon";

export default function EventCalender() {
  const localizer = luxonLocalizer(DateTime);

  const [view, setView] = React.useState(Views.WEEK);

  return (
    <Fragment>
      <div className="h-screen">
        <Calendar localizer={localizer} defaultView={Views.WEEK} />
      </div>
    </Fragment>
  );
}
