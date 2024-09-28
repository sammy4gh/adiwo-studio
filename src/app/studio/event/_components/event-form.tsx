import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { EventFormType, eventSchema } from "@/types/schemas/event-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateTime } from "luxon";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DateTimePicker } from "@/components/datetime-picker";
import { AutosizeTextarea } from "@/components/autosize-textarea";

function EventForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [startTime, setStartTime] = useState<string>("05:00");
  const [endTime, setEndTime] = useState<string>("07:00");
  const [date, setDate] = useState<Date | null>(null);
  const form = useForm<EventFormType>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      startDate: DateTime.local().toJSDate(),
      endDate: DateTime.local().plus({ hour: 1 }).toJSDate(),
    },
  });

  const onSubmit = (data: EventFormType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-8"}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="How will you like to call the event"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex w-72 flex-col gap-2">
              <FormLabel htmlFor="datetime">Start time</FormLabel>
              <FormControl>
                <DateTimePicker
                  value={field.value}
                  onChange={field.onChange}
                  hourCycle={12}
                  displayFormat={{ hour12: "PP HH:mm b" }}
                  placeholder={"When should it start"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem className="flex w-72 flex-col gap-2">
              <FormLabel htmlFor="datetime">End time</FormLabel>
              <FormControl>
                <DateTimePicker
                  value={field.value}
                  onChange={field.onChange}
                  hourCycle={12}
                  displayFormat={{ hour12: "PP HH:mm b" }}
                  placeholder={"When should it end"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="bio">Description</FormLabel>
              <FormControl>
                <AutosizeTextarea
                  id="bio"
                  {...field}
                  placeholder={"How will you describe this event"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default EventForm;
