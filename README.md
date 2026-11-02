# Joshua Sarno — Portfolio for Vercel

A complete static website. No Node build, API keys, or server are required.

## Deploy on Vercel

1. Extract this ZIP. The folder containing `vercel.json` is the project root.
2. Upload the folder to your Git repository and import that repository into Vercel.
3. Choose Framework Preset **Other**, leave the build/install commands empty, and set Output Directory to **public**. The included `vercel.json` supplies these settings.
4. Deploy.

For a local preview, run `python -m http.server 8000 --directory public` from this folder.

## Landing animation

A smooth, 1.6-second entrance brings in the navigation, orange circle, text, buttons, and portrait when the page first opens. It plays once per arrival at the top of the page. The photo/GIF loop begins after the entrance finishes. Scrolling or interacting completes the entrance immediately, and reduced-motion preferences skip it. Edit the entrance timing in `public/styles.css` and its lifecycle in `public/landing.js`.

## Portrait / GIF loop

The hero displays Joshua’s photograph for two seconds, followed by the selected Tenor anime wave for two seconds, continuously. The GIF’s room background is removed and the character is aligned to the portrait’s head height in a fixed frame. Smooth crossfades connect the phases. The original GIF repeats at its natural speed within its two-second phase.

The animation is an optimized WebP image; there is no video element, audio, media control, or third-party embed. Reduced-motion visitors see the photograph. The page restores the photograph when offscreen, in a hidden tab, or if the animated image fails to load.

- `public/assets/joshua-tenor-portrait-loop.webp`: self-contained four-second loop, 928 × 768.
- `public/assets/tenor-wave-transparent.webp`: aligned GIF cutout with alpha transparency for reuse.
- `public/portrait.js`: visibility and static-image fallback.
- `animation/`: original GIF, source attribution, optional background-removal and rendering scripts. These tools are not required for Vercel.

Both phases share the same centered layout, so switching does not expand the portrait area. The waving hand has room within the fixed frame.

## Editing

Edit content in `public/index.html`, styling in `public/styles.css`, and general interactions in `public/app.js`. The font and Lenis scrolling library are self-hosted. Projects remain intentionally empty. The contact form opens an email draft for the visitor to review and send; it does not send messages from a server.

Verified responsive framing on desktop, mobile, and tablet; no video controls; reduced-motion and failed-image fallbacks; and offscreen behavior.
