import React from "react";
import { EventProps } from "react-big-calendar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface CalenderEventProps extends EventProps {}

function CalenderEvent({ event }: CalenderEventProps) {
  return (
    <Card className={"h-full w-full"}>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default CalenderEvent;
