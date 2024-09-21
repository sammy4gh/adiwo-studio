import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, FileText, Library, MapPinHouse } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

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

        <div className="mb-8 grid grid-cols-3 gap-4">
          <Link href={"/studio/event"}>
            <Card className={""}>
              <CardHeader className={"flex flex-row items-center gap-2"}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <Clock className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <CardTitle>Event</CardTitle>
                  <CardDescription>Manage your events</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
          <Link href={"/studio/material"}>
            <Card className={""}>
              <CardHeader className={"flex flex-row items-center gap-2"}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <Library className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <CardTitle>Library</CardTitle>
                  <CardDescription>Manage your library</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
          <Link href={"/studio/room"}>
            <Card className={""}>
              <CardHeader className={"flex flex-row items-center gap-2"}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <MapPinHouse className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <CardTitle>Room</CardTitle>
                  <CardDescription>Manage your rooms</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
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
