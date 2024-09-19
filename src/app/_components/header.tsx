import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {ThemeToggle} from "@/app/_components/theme-toggle";

function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link className="flex items-center justify-center" href="/">
        <ArrowRight className="h-6 w-6 mr-2" />
        <span className="font-bold">Studio</span>
      </Link>
      <ThemeToggle />
    </header>
  );
}

export default Header;
