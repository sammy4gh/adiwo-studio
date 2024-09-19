import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, FileText } from "lucide-react";

function Page() {
  return (
    <section>
      <main className="flex-1 overflow-auto p-6">
        <h1 className="mb-4 text-2xl font-bold">Welcome to Your Dashboard</h1>
        <p className="mb-6 text-sm text-accent-foreground">
          Free • 205 MB used of 5 GB (4%)
        </p>
        <div className="mb-8 flex justify-between">
          <h2 className="text-xl font-semibold">Create New</h2>
          <div className="space-x-2">
            <Button variant="outline">Install apps</Button>
            <Button>Buy Premium</Button>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-4 rounded-lg bg-background p-4 shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">Timetable</h3>
              <p className="text-sm text-gray-600">Manage your schedule</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 rounded-lg bg-background p-4 shadow">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold">Library</h3>
              <p className="text-sm text-gray-600">Access your resources</p>
            </div>
          </div>
        </div>

        <h2 className="mb-4 text-xl font-semibold">Quick access</h2>
        <div className="overflow-hidden rounded-lg bg-background shadow">
          <div className="border-b p-4">
            <Button variant="ghost" className="mr-2">
              Recently opened
            </Button>
            <Button variant="ghost" className="mr-2">
              Shared
            </Button>
            <Button variant="ghost">Favorites</Button>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600">No recent items</p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Page;
