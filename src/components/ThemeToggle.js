"use client";

import {useHotkeys} from "react-hotkeys-hook";
import {useState} from "react";
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";

async function toggleTheme(setHotKeyEnabled, resolvedTheme, setTheme) {
  const themeButton = document.querySelector("footer > div > div:last-child > button");
  themeButton.setAttribute("disabled", "");
  setHotKeyEnabled(false);
  const newTheme = resolvedTheme === "dark" ? "light" : "dark";
  const transition = document.startViewTransition(() => setTheme(newTheme));
  try {
    await transition.finished;
  } finally {
    themeButton.removeAttribute("disabled");
    setHotKeyEnabled(true);
  }
}

export default function ThemeToggle() {
  const [hotKeyEnabled, setHotKeyEnabled] = useState(true);
  const {resolvedTheme, setTheme} = useTheme();

  useHotkeys("t", () => toggleTheme(setHotKeyEnabled, resolvedTheme, setTheme), {enabled: hotKeyEnabled});

  return (
    <div className="flex items-center gap-2">
      <span>Theme</span>
      <Button
        variant="outline"
        size="icon"
        className="h-7 w-7 border-2"
        onClick={() => toggleTheme(setHotKeyEnabled, resolvedTheme, setTheme)}>
        T
      </Button>
    </div>
  );
}
