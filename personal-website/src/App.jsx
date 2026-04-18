import profileImage from "./assets/profile-img.png";
import iqcLogo from "./assets/iqcLogo.png";
import dsLogo from "./assets/ds_thumbnail_transparent.png";
import microLogo from "./assets/microchip_thumbnail_transparent.png";
import charityCanLogo from "./assets/charitycan_thumbnail_transparent.png";
import scotiaLogo from "./assets/scotiabank_thumbnail_transparent.png";
import projects from "./projects";
import ProjectPost from "./ProjectPost";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function extractYoutubeId(url) {
  const regExp = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&?/]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

const experiences = [
  {
    title: "UW Institute for Quantum Computing Internship",
    logo: iqcLogo,
    description:
      "I integrated a wavelength meter into the control system for the development of a new quantum computing apparatus, working under Dr. Crystal Senko.",
    year: "Sep-Dec 2023",
  },
  {
    title: "Distributed Spectrum Internship",
    logo: dsLogo,
    description:
      "I developed the short-range communication system that powered the command and control of a new suite of SDR sensors as employee number 1 at a radio software startup.",
    year: "Jan-Apr 2023",
  },
  {
    title: "Microchip Technology Internship",
    logo: microLogo,
    description:
      "As a software engineer intern, I developed a prototype device register map application that allowed engineers to view and edit register bitmaps for all the chip they were working on in a streamlined, robust interface.",
    year: "Jan-Apr 2022",
  },
  {
    title: "CharityCan Internship",
    logo: charityCanLogo,
    description:
      "As a full stack developer, I added new features to a donor discovery platform by leveraging open-source data sets to surface likely donors to our non-profit management clients.",
    year: "May-Aug 2021",
  },
  {
    title: "Scotiabank Internship",
    logo: scotiaLogo,
    description:
      "As a technology analyst intern, I sped up database queries by restructuring their hierarchy and built a web app to manage emergency contacts.",
    year: "Jan-Apr 2020",
  },
];

const creative_work = [
  {
    title: "Music: H. Ali",
    body_text:
      "I write and produce music under the name H. Ali. The music video for my first official release 'Here For You' was filmed in Toronto with original choreo and performances from my dance friends I met at UWaterloo.",
    youtube_link: "https://www.youtube.com/watch?v=bLoNQEXcUAI",
  },
  {
    title: "Dance: UWaterloo Hip Hop Club",
    body_text:
      "Dance! Is so fun! Over three years at the UW Hip Hop club I took dozens of classes, taught 3 of my own, and was the performance director for 3 showcase teams. Some of my favorite memories from school were from this dance team. I still take classes in NYC when I can to keep sharp.",
    youtube_link: "https://www.youtube.com/watch?v=FaiGCAGzwz0",
  },
];

function ProjectGrid() {
  return (
    <section className="mb-20">
      <h3 className="text-2xl font-semibold mb-6">Software Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </CardContent>
            <div className="px-6 pb-2">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full object-contain rounded-md"
              />
            </div>
            <CardFooter className="gap-3 pt-4">
              <Button variant="default" size="sm" asChild>
                <Link to={`/projects/${project.slug}`}>Read more →</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.github_link} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ExperienceGrid() {
  return (
    <section className="mb-20">
      <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-base">{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              <img
                src={exp.logo}
                alt={`${exp.title} logo`}
                className="h-10 object-contain"
              />
            </CardContent>
            <CardFooter>
              <span className="text-xs text-muted-foreground">{exp.year}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="max-w-5xl mx-auto px-10 py-10 font-serif">
        {/* Navbar */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-20">
          <h1 className="text-2xl font-bold m-0">
            <Link to="/" className="text-foreground no-underline hover:no-underline">
              Hamza Sayed-Ali
            </Link>
          </h1>
          <nav className="flex flex-wrap gap-x-6 gap-y-1">
            {[
              { to: "/", label: "Home" },
              { to: "/projects", label: "Projects" },
              { to: "/work", label: "Work" },
              { to: "/creative", label: "Creative" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm font-medium text-foreground no-underline hover:underline"
              >
                {label}
              </Link>
            ))}
          </nav>
        </header>

        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <section className="flex flex-col sm:flex-row items-start gap-8 mb-20">
                  <img
                    src={profileImage}
                    alt="Hamza profile"
                    className="w-36 h-36 rounded-full object-cover sm:order-last shrink-0"
                  />
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-semibold mb-3">Hi, I'm Hamza</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                      I am a software engineer and musician based in NYC. I studied Computer
                      Engineering at the University of Waterloo and am currently working as an
                      Embedded Software Engineer at Distributed Spectrum.
                    </p>
                  </div>
                </section>
                <ProjectGrid />
                <ExperienceGrid />
              </>
            }
          />

          {/* Projects */}
          <Route path="/projects" element={<ProjectGrid />} />

          {/* Project blog post */}
          <Route path="/projects/:slug" element={<ProjectPost />} />

          {/* Work */}
          <Route path="/work" element={<ExperienceGrid />} />

          {/* Creative */}
          <Route
            path="/creative"
            element={
              <section className="mb-20">
                <h3 className="text-2xl font-semibold mb-6">Creative Work</h3>
                <div className="grid grid-cols-1 gap-10 max-w-2xl">
                  {creative_work.map((item, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.body_text}
                      </p>
                      {item.youtube_link && (
                        <div
                          className="relative w-full max-w-xl"
                          style={{ paddingBottom: "56.25%", height: 0 }}
                        >
                          <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${extractYoutubeId(item.youtube_link)}`}
                            title={item.title}
                            style={{ border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            }
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={
              <section className="mb-20">
                <h3 className="text-2xl font-semibold mb-4">Contact</h3>
                <p className="text-muted-foreground">
                  Reach me at:{" "}
                  <a
                    href="mailto:hamzasayedali@gmail.com"
                    className="font-medium text-foreground hover:underline"
                  >
                    hamzasayedali@gmail.com
                  </a>
                </p>
              </section>
            }
          />
        </Routes>

        <footer className="pt-10 border-t border-border text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hamza Sayed-Ali</p>
        </footer>
      </div>
    </Router>
  );
}
