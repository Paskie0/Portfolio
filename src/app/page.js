import {Button} from "@/components/ui/button";
import {LayoutTemplate, ScrollText} from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto h-screen grid items-center px-4">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_200px_50px] shadow-primary/50"></div>
      <div className="grid gap-8">
        <div className="grid gap-2">
          <h1 className="text-center text-5xl font-light">Pascal de Wit</h1>
          <p className="text-center text-muted-foreground">Software Developer & Student</p>
        </div>
        <div className="flex justify-center gap-8">
          <Button
            variant="outline"
            className="flex gap-2 bg-primary/5 backdrop-blur-sm border-2 rounded-full transition-all">
            <LayoutTemplate />
            Projects
          </Button>
          <Button
            variant="ghost"
            className="flex gap-2 bg-primary/5 backdrop-blur-sm border-2 rounded-full transition-all">
            <ScrollText />
            Resume
          </Button>
        </div>
      </div>
    </main>
  );
}
