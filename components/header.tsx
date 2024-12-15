"use client";

import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ShareDialog } from "@/components/share-dialog";

export function Header() {
  return (
    <header className="border-b">
      <div className="container max-w-2xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Daily Street Bingo
          </h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Trophy className="h-5 w-5" />
            </Button>
            <ShareDialog />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}