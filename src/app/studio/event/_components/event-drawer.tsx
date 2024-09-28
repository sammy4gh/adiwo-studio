"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import EventForm from "@/app/studio/event/_components/event-form";

type Props = {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
};

export function EventDrawer({ isOpen, setIsOpen }: Props) {
  return (
    <div className="h-scre relative">
      {/* Drawer */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className={"min-w-[calc(100vw/2)]"}>
          <SheetHeader>
            <SheetTitle>Drawer Content</SheetTitle>
            <SheetDescription>
              This is a drawer that slides from the left side of the screen.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <EventForm />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
