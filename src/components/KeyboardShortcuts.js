"use client";

import {useHotkeys} from "react-hotkeys-hook";
import ContactDrawer from "@/components/ContactDrawer";
import {Button} from "@/components/ui/button";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

function toggleSocials() {
  console.log("w.i.p 😄");
}

function konamiCheck(e, konami) {
  konami.push(e);
  if (konami.length > KONAMI_CODE.length) konami.shift();
  if (JSON.stringify(konami) === JSON.stringify(KONAMI_CODE)) {
    window.location.href = "https://youtu.be/Yu7qutW5x70";
  }
}

export default function KeyboardShortcuts() {
  let konami = [];

  useHotkeys("c", () => toggleSocials());
  useHotkeys("up, down, left, right, b, a", (e) => konamiCheck(e.key, konami));

  return (
    <div className="flex gap-2 justify-self-end">
      <ContactDrawer>
        <div className="flex items-center gap-2">
          <span>Contact</span>
          <Button variant="outline" size="icon" className="h-7 w-7 border-2" onClick={toggleSocials}>
            C
          </Button>
        </div>
      </ContactDrawer>
    </div>
  );
}
