import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import { Bot, SquareTerminal, Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="grid h-screen w-full pl-[56px]">
          <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
            <div className="border-b p-2">
              <Button variant="outline" size="icon" aria-label="Home">
                <Triangle className="size-5 fill-foreground" />
              </Button>
            </div>
            <nav className="grid gap-1 p-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="rounded-lg bg-muted"
                      aria-label="Playground"
                    >
                      <Link href="/manage">
                        <SquareTerminal className="size-5" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={5}>
                    Manage
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="rounded-lg"
                      aria-label="Models"
                    >
                      <Link href="/practice">
                        <Bot className="size-5" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={5}>
                    Practice
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </nav>
          </aside>
          <div className="flex flex-col">
            <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
              <h1 className="text-xl font-semibold">Playground</h1>
            </header>
            <main className="grid gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
