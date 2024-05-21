import {ModeToggle} from "@/components/ModeToggle";
import {Button} from "@/components/ui/button";
import {Link} from "next-view-transitions";

export default function Header() {
  return (
    <header className="sticky top-0 p-2 border-b backdrop-blur-sm">
      <div className="max-w-screen-md mx-auto grid grid-flow-col grid-cols-[1fr_auto]">
        <div className="justify-self-start">
          <Button asChild variant="ghost">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/">Projects</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/">Career</Link>
          </Button>
        </div>
        <ModeToggle className="justify-self-end" />
      </div>
    </header>
  );
}
