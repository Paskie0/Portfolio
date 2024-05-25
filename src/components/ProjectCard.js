import {Link} from "next-view-transitions";
import {Card, CardHeader, CardTitle} from "@/components/ui/card";
import {MoveUpRight} from "lucide-react";

export default function ProjectCard() {
  return (
    <Card className="h-64 rounded-none transition-all [&:hover_svg]:opacity-100 [&:hover_svg]:translate-x-1 [&:hover_svg]:-translate-y-1">
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>Project</CardTitle>
        <Link href="/" className="!mt-0">
          <MoveUpRight className="justify-self-end h-[1.2rem] w-[1.2rem] opacity-50 transition-all" />
        </Link>
      </CardHeader>
    </Card>
  );
}
