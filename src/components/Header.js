import {ModeToggle} from "@/components/ModeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 grid justify-end px-4 py-2 backdrop-blur-sm">
      <ModeToggle />
    </header>
  );
}
