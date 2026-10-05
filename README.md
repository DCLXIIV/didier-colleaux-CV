# Didier Colleaux — CV

Public, transferable HTML version of Didier Colleaux's CV.

## Structure
- `index.html` — lightweight responsive entry point
- `cv-source.html` — preserved complete interactive CV source
- `responsive-guard.css` — cross-device layout/media safeguards
- `responsive-guard.js` — viewport, media and external-link safeguards
- `assets/video.partXX.b64` — embedded CV video split into portable text chunks
- `.gitignore` — local/editor exclusions

## Responsive behavior
The production entry point loads the preserved CV source and injects a compatibility layer for desktop, tablet and smartphone. The CV stage, images, video, embeds, text, links and tables are constrained to the available viewport while preserving the original layout.

## Local preview
Serve the repository through a local HTTP server because the video chunks and preserved source are fetched at runtime.

## Deployment
This is a static site and can be deployed on Vercel, Netlify, GitHub Pages, or any static host.

Contact: dclxdesign@gmail.com
