import {ModeToggle} from "@/components/ModeToggle";
import {Link} from "next-view-transitions";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b backdrop-blur-sm">
      <div className="max-w-screen-md mx-auto grid grid-flow-col grid-cols-[1fr_auto] px-4 py-2">
        <div className="justify-self-start flex gap-4 items-center text-sm font-medium">
          <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
            Projects
          </Link>
        </div>
        <ModeToggle className="justify-self-end" />
      </div>
    </header>
  );
}
