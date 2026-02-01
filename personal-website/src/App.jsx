import "./App.css";
import profileImage from "./assets/profile-img.png";
import iqcLogo from "./assets/iqcLogo.png";
import dsLogo from "./assets/ds_thumbnail_transparent.png";
import microLogo from "./assets/microchip_thumbnail_transparent.png";
import charityCanLogo from "./assets/charitycan_thumbnail_transparent.png";
import scotiaLogo from "./assets/scotiabank_thumbnail_transparent.png";
import fydpThumbnail from "./assets/fydp_thumbnail.png";
import pygameThumbnail from "./assets/pygame_thumbnail.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function extractYoutubeId(url) {
  // Works for URLs like:
  // https://www.youtube.com/watch?v=VIDEO_ID
  // https://youtu.be/VIDEO_ID
  const regExp = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&?/]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

export default function App() {
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
    // Add more experiences here
  ];

  const projects = [
    {
      title: "Pygame 3D Rendering Engine",
      description: "As an excercise to learn the math behind computer graphics, I made a 3D rendering engine only using the Pygame library. Basic geometry, lighting, model rendering, and some additional features included.",
      thumbnail: pygameThumbnail,
      github_link: "https://github.com/hamzasayedali/python-renderer"
    },
    {
      title: "Polaris Projector System",
      description: "Projector that automatically resizes, rotates, and deskews images based on a suite of sensors and computer vision running on a RasberryPi. This was my Undergrad Engineering Capstone project.",
      thumbnail: fydpThumbnail,
      github_link: "https://github.com/FYDP2024/WallBoundProjector"
    }
  ];

  const creative_work = [
    {title: "Music: H. Ali",
      body_text: "I write and produce music under the name H. Ali. The music video for my first official release 'Here For You' was filmed in Toronto with original choreo and perfomances from my dance friends I met at UWaterloo.",
      youtube_link: "https://www.youtube.com/watch?v=bLoNQEXcUAI"
    },
    {
      title: "Dance: UWaterloo Hip Hop Club",
      body_text: "Dance! Is so fun! Over three years at the UW Hip Hop club I took dozens of classes, taught 3 of my own, and was the performance director for 3 showcase teams. Some of my favorite memories from school were from this dance team. I still take classes in NYC when I can to keep sharp.",
      youtube_link: "https://www.youtube.com/watch?v=FaiGCAGzwz0"
    }
  ];

  return (
    <Router>
      <div className="page">
        {/* Navbar */}
        <header className="navbar">
          <h1 className="logo">Hamza Sayed-Ali</h1>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/work">Work</Link>
            <Link to="/creative">Creative</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <Routes>
          {/* Home / Hero */}
          <Route
            path="/"
            element={
              <>
              <section className="hero">
                <img src={profileImage} alt="Hamza profile" className="profile-image" />
                <div className="hero-text">
                  <h2>Hi, I’m Hamza</h2>
                  <p>
                    I am a software engineer and musician based in NYC. I studied Computer Engineering at the University of Waterloo and am currently working as an Embedded Software Engineer at Distributed Spectrum.
                  </p>
                </div>
              </section>

              <section id="projects" className="section">
                <h3>Software Projects</h3>
                <div className="project-grid">
                  {projects.map((exp, index) => (
                    <div className="project-card" key={index}>
                      <div>
                        <h4>{exp.title}</h4>
                        <p>{exp.description}</p>
                        <a target="_blank" href={exp.github_link}>Github</a>
                      </div>
                      <img src={exp.thumbnail} alt={`${exp.title} logo`} className="project-thumbnail" />
                    </div>
                  ))}
                </div>
              </section>
              <section id="about" className="section">
                <h3>Professional Experience</h3>
                <div className="experience-grid">
                  {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                      <h4>{exp.title}</h4>
                      <p>{exp.description}</p>
                      <img src={exp.logo} alt={`${exp.title} logo`} className="experience-logo" />
                      <br/>
                      <span className="year">{exp.year}</span>
                    </div>
                  ))}
                </div>
              </section>
              </>

            }
          />

          {/* Projects Page */}
          <Route
            path="/projects"
            element={
              <section id="projects" className="section">
                <h3>Software Projects</h3>
                <div className="project-grid">
                  {projects.map((exp, index) => (
                    <div className="project-card" key={index}>
                      <div>
                        <h4>{exp.title}</h4>
                        <p>{exp.description}</p>
                        <a target="_blank" href={exp.github_link}>Github</a>
                      </div>
                      <img src={exp.thumbnail} alt={`${exp.title} logo`} className="project-thumbnail" />
                    </div>
                  ))}
                </div>
              </section>
            }
          />

          {/* Work Page */}
          <Route
            path="/work"
            element={
              <section id="about" className="section">
                <h3>Professional Experience</h3>
                <div className="experience-grid">
                  {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                      <h4>{exp.title}</h4>
                      <p>{exp.description}</p>
                      <img src={exp.logo} alt={`${exp.title} logo`} className="experience-logo" />
                      <br/>
                      <span className="year">{exp.year}</span>
                    </div>
                  ))}
                </div>
              </section>
            }
          />

          {/* Creative Page */}
          <Route
            path="/creative"
            element={
              <section className="section">
                <h3>Creative Work</h3>
                
                {/* You can add cards, embeds, or images here like you did for projects */}
                <div className="creative-grid">
                  {creative_work.map((exp, index) => (
                    <div className="creative-post" key={index}>
                      <h4>{exp.title}</h4>
                      <p>{exp.body_text}</p>
                      {/* YouTube Embed */}
                      {exp.youtube_link && (
                        <div className="youtube-container">
                          <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${extractYoutubeId(exp.youtube_link)}`}
                            title={exp.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
              </section>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <section id="contact" className="section">
                <h3>Contact</h3>
                <p>
                  Reach me at: <strong>hamzasayedali@gmail.com</strong>
                </p>
              </section>
            }
          />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Hamza Sayed-Ali</p>
        </footer>
      </div>
    </Router>
  );
}