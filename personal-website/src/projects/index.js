import pygameThumbnail from "../assets/pygame_thumbnail.png";
import fydpThumbnail from "../assets/fydp_thumbnail.png";

// Add new thumbnail imports here as you add projects
const thumbnails = {
  "pygame_thumbnail.png": pygameThumbnail,
  "fydp_thumbnail.png": fydpThumbnail,
};

// Auto-imports every .md file in src/markdown_blogs/ as a raw string
const markdownFiles = import.meta.glob("../markdown_blogs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return null;
  const data = {};
  match[1].split("\n").forEach((line) => {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    data[key] = value;
  });
  return {
    ...data,
    thumbnail: thumbnails[data.thumbnail],
    content: match[2].trim(),
  };
}

const projects = Object.values(markdownFiles).map(parseFrontmatter).filter(Boolean);

export default projects;
