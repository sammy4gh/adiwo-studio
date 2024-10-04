import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import {
  eventSchema,
  EventSchemaType,
  repeatPresets,
  MilestonePresetsSchemaType,
} from "@/types/schemas/event-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DateTime } from "luxon";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DateTimePicker, TimePicker } from "@/components/datetime-picker";
import { AutosizeTextarea } from "@/components/autosize-textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Delete, Pencil, Plus, Send, Trash, Trash2 } from "lucide-react";
import { nextMilestoneDate } from "@/app/studio/event/lip/utils";
import { Textarea } from "@/components/ui/textarea";
import { LinguaDateTimePicker } from "@/components/lingua-time/lingua-date-time-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function EventForm() {
  const form = useForm<EventSchemaType>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      startDate: DateTime.local().toJSDate(),
      endDate: DateTime.local().toJSDate(),
      startTime: DateTime.local().toJSDate(),
      endTime: DateTime.local().plus({ hour: 1 }).toJSDate(),
    },
  });

  const onSubmit = (data: EventSchemaType) => {
    console.log(data);
  };

  //milesone array form filed

  const {
    fields: milestones,
    append: addMilestone,
    remove: removeMilestone,
    update: updateMilestone,
    insert: insertMilestone,
    swap: swapMilestone,
    move: moveMilestone,
    prepend: prependMilestone,
    replace: replaceMilestone,
  } = useFieldArray({
    control: form.control,
    name: "milestones",
  });

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
        <div className="flex justify-between">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex w-72 flex-col gap-2">
                <FormLabel htmlFor="datetime">Start date</FormLabel>
                <FormControl>
                  <DateTimePicker
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={"When should it start"}
                    granularity={"day"}
                    displayFormat={{ hour24: "EEE, MMMM dd, yyyy" }}
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
                <FormLabel htmlFor="datetime">End date</FormLabel>
                <FormControl>
                  <DateTimePicker
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={"When should it start"}
                    granularity={"day"}
                    displayFormat={{ hour24: "EEE, MMMM dd, yyyy" }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className={"flex justify-between gap-4"}>
          <FormField
            control={form.control}
            name="milestonePreset"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Repeat</FormLabel>
                <FormControl>
                  <Select {...field} defaultValue={"weekly"}>
                    <FormControl>
                      <SelectTrigger className={"capitalize"}>
                        <SelectValue placeholder="Milestone steps" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className={"capitalize"}>
                      {repeatPresets.map(
                        (preset: MilestonePresetsSchemaType) => (
                          <SelectItem key={preset} value={preset}>
                            {preset}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel htmlFor="datetime">Start at</FormLabel>
                <FormControl>
                  <Input
                    type="time"
                    {...field}
                    value={
                      field.value instanceof Date
                        ? field.value.toISOString().split("T")[0]
                        : field.value
                    }
                    defaultValue={
                      field.value instanceof Date
                        ? field.value.toISOString().split("T")[0]
                        : field.value
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endTime"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel htmlFor="datetime">End at</FormLabel>
                <FormControl>
                  <Input
                    type="time"
                    {...field}
                    value={
                      field.value instanceof Date
                        ? field.value.toISOString().split("T")[0]
                        : field.value
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
        <section className={"flex flex-col gap-4"}>
          <div className="flex items-end gap-2">
            {/*  TODO: MOVE PRESET TO BASE OF FORM AND USE SAME FOR MILESTONES BUT ALLOW USER TO OVERRIDE*/}
            {/*    Milestone preset select*/}
            <FormField
              control={form.control}
              name="milestonePreset"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Milestones</FormLabel>
                  <FormControl>
                    <Select {...field} defaultValue={"weekly"}>
                      <FormControl>
                        <SelectTrigger className={"capitalize"}>
                          <SelectValue placeholder="Milestone steps" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {repeatPresets.map(
                          (preset: MilestonePresetsSchemaType) => (
                            <SelectItem key={preset} value={preset}>
                              {preset}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button type="button" size={"icon"} variant={"outline"}>
                  <Plus />
                </Button>
              </PopoverTrigger>
              <PopoverContent className={"flex flex-col gap-2"}>
                {/* Form field for new milestone name only */}
                <FormField
                  control={form.control}
                  name="newMilestone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  onClick={() => {
                    addMilestone({
                      date: nextMilestoneDate(
                        form.getValues("milestonePreset"),
                      ),
                      title: form.getValues("newMilestone"),
                    });
                    form.setValue("newMilestone", ""); // Clear the input field after adding
                  }}
                >
                  <Plus size={16} className={"mr-2"} />
                  Add
                </Button>
              </PopoverContent>
            </Popover>
          </div>
          {/* Milestone list */}
          <div className="items-end space-y-4">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className="flex items-end justify-evenly gap-4"
              >
                {/*Select for week numbers based on mistonelist*/}
                <FormField
                  control={form.control}
                  name={`milestones.${index}.date`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <DateTimePicker
                          value={field.value}
                          onChange={field.onChange}
                          placeholder={"When should it start"}
                          granularity={"day"}
                          displayFormat={{ hour24: "EEE, MMMM dd, yyyy" }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`milestones.${index}.title`}
                  render={({ field }) => (
                    <FormItem className={"flex-1"}>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className={"flex gap-2"}>
                  <Button
                    type="button"
                    variant={"ghost"}
                    onClick={() => removeMilestone(index)}
                  >
                    <Pencil size={16} className={"mr-2"} />
                  </Button>
                  <Button
                    type="button"
                    variant={"ghost"}
                    onClick={() => removeMilestone(index)}
                  >
                    <Trash2 size={16} className={"mr-2"} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Button type="submit">
          <Send className={"mr-2"} size={16} />
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default EventForm;
