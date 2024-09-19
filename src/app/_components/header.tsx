import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/app/_components/theme-toggle";

function Header() {
  return (
    <header className="flex h-14 items-center justify-between px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="/">
        <ArrowRight className="mr-2 h-6 w-6" />
        <span className="font-bold">Studio</span>
      </Link>
      <ThemeToggle />
    </header>
  );
}

export default Header;
