import "@/styles/globals.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "@/app/_components/theme-provider";
import Header from "@/app/_components/header";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Adiwo Studio",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // addRxPlugin(RxDBDevModePlugin);

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <ThemeProvider attribute="class" defaultTheme={"system"} enableSystem>
            <Header />
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
