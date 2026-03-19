# Code Structuring for Bigger Projects — Three.js Journey

Quick recap of the **Code structuring for bigger projects** lesson from [Three.js Journey](https://threejs-journey.com/) by Bruno Simon.

---

## What This Lesson Covers

How to structure a growing Three.js project so the code stays readable, maintainable, and easy to scale.

---

## Key Learnings

### 1. Splitting code into classes

- Separate responsibilities (scene, camera, renderer, resources, world, etc.).
- Avoid monolithic files that become hard to maintain.
- Keep logic encapsulated in clear, single-responsibility classes.

### 2. Organizing code into modules

- Structure files by feature and purpose.
- Import only what is needed in each module.
- Build a cleaner architecture that is easier to evolve over time.

### 3. Improving long-term maintainability

- Make the project easier to read and revisit later.
- Add new features with less friction.
- Reduce side effects when changing one part of the codebase.

---

## Project setup

- **Vite** + **Three.js** + **lil-gui** for real-time parameter tweaking.
- Run:
  - `npm install`
  - `npm run dev`

---

_Part of the Three.js Journey course by Bruno Simon._
