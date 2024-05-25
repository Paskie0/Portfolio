import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <main className="px-4">
      <h1 className="page-title text-center text-3xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 overflow-hidden [&:has(:hover)_>_div:not(:hover)]:opacity-50">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
}
