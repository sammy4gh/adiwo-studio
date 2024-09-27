"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type Props = {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
};

export function EventDrawer({ isOpen, setIsOpen }: Props) {
  return (
    <div className="relative min-h-screen">
      {/* Drawer */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Drawer Content</SheetTitle>
            <SheetDescription>
              This is a drawer that slides from the left side of the screen.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p>You can add any content here.</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
