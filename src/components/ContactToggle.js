"use client";

import {useHotkeys} from "react-hotkeys-hook";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function ContactToggle() {
  const [open, setOpen] = useState(false);
  useHotkeys("c", () => (open === false ? setOpen(true) : setOpen(false)));

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <div className="flex items-center gap-2">
        <span>Contact</span>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon" className="h-7 w-7 border-2" onClick={() => setOpen(true)}>
            C
          </Button>
        </DrawerTrigger>
      </div>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
