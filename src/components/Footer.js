import {Link} from "next-view-transitions";

export default function Footer() {
  return (
    <footer className="max-w-screen-md mx-auto grid grid-flow-col grid-cols-[1fr_auto] p-4 text-muted-foreground text-sm font-semibold">
      <div className="justify-self-start">
        <a href="https://youtu.be/Yu7qutW5x70">Pascal de Wit</a>
      </div>
      <div className="flexjustify-self-end">
        <Link
          href="/"
          className="underline decoration-transparent hover:decoration-current underline-offset-4 transition-colors">
          Home
        </Link>
        <span className="select-none"> • </span>
        <Link
          href="/"
          className="underline decoration-transparent hover:decoration-current underline-offset-4 transition-colors">
          Career
        </Link>
        <span className="select-none"> • </span>
        <Link
          href="/"
          className="underline decoration-transparent hover:decoration-current underline-offset-4 transition-colors">
          Projects
        </Link>
        <span className="select-none"> • </span>
        <Link
          href="/"
          className="underline decoration-transparent hover:decoration-current underline-offset-4 transition-colors">
          Contact
        </Link>
      </div>
    </footer>
  );
}
