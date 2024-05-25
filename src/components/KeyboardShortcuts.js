"use client";

import {useHotkeys} from "react-hotkeys-hook";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {useState} from "react";

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

async function toggleTheme(resolvedTheme, setTheme, setHotKeyEnabled) {
  const newTheme = resolvedTheme === "dark" ? "light" : "dark";
  const transition = document.startViewTransition(() => setTheme(newTheme));
  try {
    await transition.finished;
  } finally {
    setHotKeyEnabled(true);
  }
}

function konamiCheck(e, konami) {
  konami.push(e);
  if (konami.length > KONAMI_CODE.length) konami.shift();
  if (JSON.stringify(konami) === JSON.stringify(KONAMI_CODE)) {
    window.location.href = "https://youtu.be/Yu7qutW5x70";
  }
}

export default function KeyboardShortcuts() {
  const [hotKeyEnabled, setHotKeyEnabled] = useState(true);
  const {resolvedTheme, setTheme} = useTheme();

  let konami = [];

  useHotkeys("s", () => toggleSocials());
  useHotkeys(
    "t",
    () => {
      toggleTheme(resolvedTheme, setTheme, setHotKeyEnabled);
      setHotKeyEnabled(false);
    },
    {enabled: hotKeyEnabled}
  );
  useHotkeys("up, down, left, right, b, a", (e) => konamiCheck(e.key, konami));

  return (
    <div className="flex gap-2 justify-self-end">
      <div className="flex items-center gap-2">
        <span>Socials</span>
        <Button variant="outline" size="icon" className="h-7 w-7" onClick={toggleSocials}>
          S
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <span>Theme</span>
        <Button
          variant="outline"
          size="icon"
          className="h-7 w-7"
          onClick={() => toggleTheme(resolvedTheme, setTheme, setHotKeyEnabled)}>
          T
        </Button>
      </div>
    </div>
  );
}
