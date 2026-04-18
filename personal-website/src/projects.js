import fydpThumbnail from "./assets/fydp_thumbnail.png";
import pygameThumbnail from "./assets/pygame_thumbnail.png";

const projects = [
  {
    slug: "pygame-renderer",
    title: "Pygame 3D Rendering Engine",
    description:
      "As an exercise to learn the math behind computer graphics, I made a 3D rendering engine only using the Pygame library. Basic geometry, lighting, model rendering, and some additional features included.",
    thumbnail: pygameThumbnail,
    github_link: "https://github.com/hamzasayedali/python-renderer",
    content: {
      intro:
        "This is a placeholder intro for the Pygame 3D Rendering Engine post. Replace this with your own writing.",
      sections: [
        {
          heading: "Background",
          body: "Why did you build this? What were you trying to learn?",
        },
        {
          heading: "How it works",
          body: "Walk through the core math or architecture. What was the hardest part?",
        },
        {
          heading: "What I'd do differently",
          body: "Hindsight, lessons learned, what you'd change.",
        },
      ],
    },
  },
  {
    slug: "polaris-projector",
    title: "Polaris Projector System",
    description:
      "Projector that automatically resizes, rotates, and deskews images based on a suite of sensors and computer vision running on a Raspberry Pi. This was my Undergrad Engineering Capstone project.",
    thumbnail: fydpThumbnail,
    github_link: "https://github.com/FYDP2024/WallBoundProjector",
    content: {
      intro:
        "This is a placeholder intro for the Polaris Projector System post. Replace this with your own writing.",
      sections: [
        {
          heading: "The problem",
          body: "What problem were you solving? Why is auto-alignment useful?",
        },
        {
          heading: "System overview",
          body: "Describe the hardware setup, the sensors, and how the Pi ties it together.",
        },
        {
          heading: "Computer vision pipeline",
          body: "How does the image correction work? What libraries or algorithms did you use?",
        },
        {
          heading: "Takeaways",
          body: "What did you learn? How did capstone go?",
        },
      ],
    },
  },
];

export default projects;
