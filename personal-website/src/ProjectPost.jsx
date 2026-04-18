import { useParams, Link } from "react-router-dom";
import projects from "./projects";
import { Button } from "@/components/ui/button";

export default function ProjectPost() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="mb-20">
        <h3 className="text-2xl font-semibold mb-4">Post not found</h3>
        <Button variant="outline" size="sm" asChild>
          <Link to="/projects">← Back to projects</Link>
        </Button>
      </section>
    );
  }

  return (
    <section className="mb-20">
      <Button variant="ghost" size="sm" className="mb-6 -ml-2" asChild>
        <Link to="/projects">← Back to projects</Link>
      </Button>

      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">{project.title}</h2>

      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full max-w-xl object-contain rounded-lg mb-8"
      />

      <div className="max-w-2xl">
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {project.content.intro}
        </p>

        {project.content.sections.map((section, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{section.heading}</h3>
            <p className="text-muted-foreground leading-relaxed">{section.body}</p>
          </div>
        ))}

        <div className="flex gap-3 mt-10">
          <Button asChild>
            <a href={project.github_link} target="_blank" rel="noreferrer">
              View on GitHub →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
