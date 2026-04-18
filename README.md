# personal_site

Personal website built with React + Vite, deployed to GitHub Pages.

## Dev

```bash
cd personal-website
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploy

```bash
cd personal-website
npm run deploy
```

This builds the site and pushes the output to the `gh-pages` branch, which GitHub Pages serves automatically.

## Adding a project blog post

All project data and blog content lives in [`personal-website/src/projects.js`](personal-website/src/projects.js).

Each project looks like this:

```js
{
  slug: "my-project",          // URL: /projects/my-project
  title: "My Project",
  description: "Short blurb shown on the project card.",
  thumbnail: myThumbnail,      // import the image at the top of the file
  github_link: "https://github.com/...",
  content: {
    intro: "Opening paragraph for the full blog post.",
    sections: [
      { heading: "Background", body: "Why you built it." },
      { heading: "How it works", body: "The interesting technical bits." },
      { heading: "Takeaways", body: "What you learned." },
    ],
  },
}
```

To add a new project:
1. Add the thumbnail image to `personal-website/src/assets/`
2. Import it at the top of `projects.js`
3. Add a new object to the array following the shape above
4. Run `npm run deploy` to publish