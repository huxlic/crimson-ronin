# Crimson Ronin

A cinematic, wuxia/samurai-themed portfolio site built as a fictional AAA game reveal — blending interactive 3D, ink-wash visual direction, and scroll-driven storytelling into a single immersive experience.

Inspired by titles like *Where Winds Meet* and *Crimson Desert*, Crimson Ronin isn't a traditional "here's my résumé" portfolio — it's a self-contained world: a hero character, a weapon armory, character lore, and a news feed, all wrapped in a custom gold-and-crimson identity.

## ✦ Features

- **Interactive 3D weapon showcase** — real-time R3F models with custom per-weapon transforms, orbit controls, and mobile-aware touch handling
- **Cinematic scroll experience** — GSAP-driven section transitions, snap-to-section scrolling, and slide-in reveals
- **Custom loading experience** — a self-built glass-cube loader with live progress tracking via `useProgress`
- **Infinite carousel** — custom-built, no external carousel dependency
- **Ink-wash aesthetic system** — a full custom design language: brand palette, typography (self-hosted custom font), and motion style tuned to the theme
- **Performance-conscious 3D pipeline** — self-hosted compressed HDRI lighting, preloaded/compressed models, and device-aware interaction (auto-rotate on touch, manual orbit on desktop)

## ✦ Tech Stack

| Layer     | Tools                             |
|-----------|-----------------------------------|
| Framework | React, TypeScript, Next.js        |
| 3D        | React Three Fiber, drei, Three.js |
| Animation | GSAP (ScrollTrigger, SplitText)   |
| Styling   | Tailwind CSS v4                   |
| State     | Zustand                           |

## ✦ Design Direction

- **Palette:** `#CD9C61` (gold) · `#9E1B1B` (crimson)
- **Typography:** custom self-hosted display font paired with clean UI type
- **Motion:** slow, deliberate, cinematic — favoring restraint over flash

## ✦ Status

Actively in development. Current focus: character showcase section.

---

Built by [Oladimeji Hassan (@huxlic)](https://github.com/huxlic)