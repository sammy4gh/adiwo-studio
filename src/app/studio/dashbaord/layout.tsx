import React from "react";
import { FileText, Home, LayoutGrid, PenTool } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adiwo Studio",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <div className="bg- flex h-screen bg-accent">
        {/* Sidebar */}
        <div className="flex w-16 flex-col items-center space-y-4 border-r bg-background py-4">
          <Home className="h-6 w-6" />
          <PenTool className="h-6 w-6" />
          <LayoutGrid className="h-6 w-6" />
          <FileText className="h-6 w-6" />
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col">
          {/* Dashboard Content */}
          {children}
        </div>
      </div>
    </main>
  );
}

export default Layout;
