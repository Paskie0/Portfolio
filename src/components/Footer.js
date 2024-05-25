import KeyboardShortcuts from "@/components/KeyboardShortcuts";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full grid grid-flow-col px-4 py-2 text-muted-foreground text-sm">
      <div className="flex items-center justify-self-start">
        <span>Made with ❤️</span>
      </div>
      <KeyboardShortcuts />
    </footer>
  );
}
