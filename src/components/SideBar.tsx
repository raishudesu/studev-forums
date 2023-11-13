"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Atom, Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import NavMenu from "./NavMenu";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        onCloseAutoFocus={(event) => event.preventDefault()}
        className="overflow-y-auto flex flex-col items-center"
      >
        <SheetHeader>
          <SheetTitle className="flex gap-1">Studev Forums </SheetTitle>
        </SheetHeader>
        <div>
          <NavMenu />
        </div>
        <ModeToggle />
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
