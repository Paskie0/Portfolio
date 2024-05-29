import ContactToggle from "@/components/ContactToggle";
import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex justify-between px-4 py-2 text-sm font-medium">
      <span>Made with ❤️</span>
      <div className="flex gap-2">
        <ContactToggle />
        <ThemeToggle />
      </div>
    </footer>
  );
}
