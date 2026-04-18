import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import projects from "./projects/index";
import { Button } from "@/components/ui/button";

function extractYoutubeId(url) {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&?/]+)/);
  return match ? match[1] : null;
}

// Custom renderers for react-markdown
const components = {
  // Render [youtube](url) links as embedded iframes
  a({ href, children }) {
    const youtubeId = href && extractYoutubeId(href);
    if (youtubeId) {
      return (
        <div className="relative w-full max-w-xl my-6" style={{ paddingBottom: "56.25%", height: 0 }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={String(children)}
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
  },
  // Ensure images are responsive
  img({ src, alt }) {
    return <img src={src} alt={alt} className="rounded-lg w-full max-w-xl" />;
  },
};

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

      <div className="prose prose-neutral max-w-2xl font-serif">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {project.content}
        </ReactMarkdown>
      </div>

      <div className="mt-10">
        <Button asChild>
          <a href={project.github_link} target="_blank" rel="noreferrer">
            View on GitHub →
          </a>
        </Button>
      </div>
    </section>
  );
}
