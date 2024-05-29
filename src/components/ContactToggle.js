"use client";

import {useHotkeys} from "react-hotkeys-hook";
import {Button} from "@/components/ui/button";
import ContactDrawer from "@/components/ContactDrawer";
import {useState} from "react";

export default function ContactToggle() {
  const [open, setOpen] = useState(false);
  useHotkeys("c", () => (open === false ? setOpen(true) : setOpen(false)));

  return (
    <ContactDrawer open={open} onOpenChange={setOpen}>
      <Button variant="outline" size="icon" className="h-7 w-7 border-2" onClick={() => setOpen(true)}>
        C
      </Button>
    </ContactDrawer>
  );
}
