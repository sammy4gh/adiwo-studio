import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to Our Studio
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
            Unleash your creativity with our powerful tools.
          </p>
          <Button asChild size="lg">
            <Link href="/studio">
              Enter Studio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2023 Studio Inc. All rights reserved.
      </footer>
    </div>
  );
}
