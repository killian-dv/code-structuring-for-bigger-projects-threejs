# Realistic Render — Three.js Journey

Quick recap of the **Realistic Render** lesson from [Three.js Journey](https://threejs-journey.com/) by Bruno Simon.

---

## What This Lesson Covers

Building a more photorealistic scene in Three.js using **environment maps**, **PBR materials**, **shadows**, and **tone mapping**.

---

## Key Learnings

### 1. Environment maps (IBL)

- **`scene.environment`** — Image-Based Lighting: reflections and ambient lighting on materials.
- **`scene.background`** — The visible sky/background (can use the same texture).
- **Equirectangular** format: single 360° image + `EquirectangularReflectionMapping`.
- **`scene.environmentIntensity`** — Controls how strong the environment lighting is.

### 2. Directional light & shadows

- **DirectionalLight** — Sun-like light with position and target; controls intensity and position.
- **Shadows** — Enable on the light (`castShadow`) and the renderer (`shadowMap.enabled`).
- **Shadow map** — `shadow.mapSize` (e.g. 512×512), `shadow.camera.far` for range.
- **Bias / normalBias** — Reduces shadow acne and peter-panning; tune per scene.
- **`PCFSoftShadowMap`** — Softer shadow edges.
- **Meshes** — Set `castShadow` and `receiveShadow` on objects that should cast/receive shadows.
- **CameraHelper** — Visualize the shadow camera frustum for debugging.

### 3. Tone mapping

- Converts HDR values to the display range (0–1).
- **`renderer.toneMapping`** — e.g. `ReinhardToneMapping`, or `ACESFilmicToneMapping`, `CineonToneMapping`, etc.
- **`renderer.toneMappingExposure`** — Brightness of the final image (often between 1 and 3).

### 4. PBR materials & textures

- **MeshStandardMaterial** — Physically based (metalness/roughness).
- **Texture channels**:
  - **map** — Base color (albedo).
  - **normalMap** — Surface detail (bump).
  - **aoMap** — Ambient occlusion (shadows in crevices).
  - **roughnessMap** — Roughness (often from ARM/ORM texture).
  - **metalnessMap** — Metalness (often from ARM/ORM texture).
- **ARM / ORM textures** — Single texture for Ambient occlusion, Roughness, Metalness (R, G, B).
- **Color space** — Use `THREE.SRGBColorSpace` for color textures (e.g. `map`).

### 5. GLTF models

- **GLTFLoader** — Load `.gltf` / `.glb` models.
- After loading, traverse the scene and set **castShadow** / **receiveShadow** on meshes so they integrate with your lighting and shadows.

### 6. Renderer settings

- **`antialias: true`** — Smoother edges.

---

## Project setup

- **Vite** + **Three.js** + **lil-gui** for tweaking parameters in real time.
- Run: `npm run dev`

---

_Part of the Three.js Journey course by Bruno Simon._
