# Labyrinth-p5JS

Interactive maze generator and solver built with p5.js and vanilla JavaScript. This project demonstrates multiple maze-generation algorithms, solving strategies, and a lightweight, modular UI for visualization and exploration — ideal to showcase algorithmic knowledge, front-end engineering, and visualization skills to recruiters.


**Key highlights**
- Implemented multiple maze-generation algorithms: Depth-First Search (recursive backtracker), Hunt-and-Kill, Kruskal's, and Prim's.
- Implemented a maze solver (DFS) with step-by-step visualization.
- Interactive visualization built with `p5.js` for smooth rendering and controls.
- Clean, modular code structure for easy extension and experimentation.

**Tech stack**
- Frontend: Vanilla JavaScript + `p5.js` (client-side only)
- UI/Rendering: `p5.js` in `index.html`
- No build step — static assets only (open in browser)

**Repository structure**
- [index.html](index.html) — main HTML file that loads the sketch.
- [main.js](main.js) — orchestrates the app, initializes UI, handles user input and sketch lifecycle.
- [cell.js](cell.js) — cell / node representation used by the grid and algorithms.
- [maze-generator.js](maze-generator.js) — controller for generating a maze with selectable algorithms.
- [utils.js](utils.js) — helper utilities used across the project (random helpers, grid utilities, etc.).
- [style.css](style.css) — basic styling for controls and layout.
- [Generation-Algorithms/DFS.js](Generation-Algorithms/DFS.js) — recursive backtracker implementation.
- [Generation-Algorithms/HunAndKill.js](Generation-Algorithms/HunAndKill.js) — Hunt-and-Kill algorithm.
- [Generation-Algorithms/Kruskal.js](Generation-Algorithms/Kruskal.js) — Kruskal's algorithm (uses disjoint-set approach to avoid cycles).
- [Generation-Algorithms/Prim's.js](Generation-Algorithms/Prim's.js) — Prim's algorithm variant for maze generation.
- [Solver-Algorithms/DFS-Solver.js](Solver-Algorithms/DFS-Solver.js) — depth-first search solver and visualization.
- [libraries/p5.js](libraries/p5.js) — local copy of p5.js used for rendering.

**How it works (high-level)**
- Grid: The maze is modeled as a 2D grid of `Cell` objects (`cell.js`). Each cell tracks walls and visited state used by generation and solver algorithms.
- Generators: Each file in `Generation-Algorithms` exports a function (or object) implementing a generation strategy that manipulates the grid by removing walls between cells.
- Solver: The solver traverses the same grid (after generation) and animates the path discovery with the sketch.
- Rendering: `p5.js` draws the grid each animation frame — walls, visited cells, current search frontier, and solution path are color-coded.

**Algorithm notes & complexity**
- Depth-First Search (backtracker): time O(N) where N is number of cells; produces long winding passages and is easy to implement recursively or iteratively.
- Hunt-and-Kill: time O(N); mixes random walk and systematic hunt phases for a different maze aesthetic.
- Kruskal's algorithm: time O(E log E) (or roughly O(N log N)) if sorting/removing edges; uses disjoint-set / union-find to ensure acyclic connectivity.
- Prim's algorithm (maze variant): time O(N log N) with a priority structure or O(N) for optimized implementations; produces mazes with more uniform connectivity than DFS.
- Solver (DFS): time O(N) in worst case; visualized with step-by-step exploration.

**Usage (run locally)**
Option A — Double-click `index.html` (quick, works in many browsers).

Option B — Run a simple HTTP server (recommended for consistent behavior):

```bash
# From the project root
python -m http.server 8000
# or (Node.js) if you have `serve` installed:
npx serve . -l 8000

# Then open http://localhost:8000 in your browser
```

**Developer notes**
- To add a new generation algorithm: create a file in `Generation-Algorithms`, export a function that accepts the grid and necessary options, and hook it to the UI selection in `main.js` / `maze-generator.js`.
- To add a solver: implement traversal logic in `Solver-Algorithms`, and wire the control to call the solver after generation completes.
- Rendering timing and animation are handled inside the `p5.js` draw loop — keep algorithm steps incremental (yielding to the render loop) for smooth animations.

**Suggested improvements / next steps**
- Add additional solvers (BFS, A*, bidirectional search) with performance comparisons.
- Add measurement harness to record generation/solver times and path lengths for algorithm comparison.
- Add configuration UI for grid size, speed, and color themes.
- Add export (image / SVG) or shareable presets.

**Contribution & License**
- Contributions welcome: open an issue or PR with a clear description of changes.
- This project has no license file by default; add a LICENSE if you want to declare reuse rules.

**Contact / About the author**
- If you are the repository owner, replace this section with your name and contact (LinkedIn, email) and 2–3 resume-oriented bullets summarizing your role and achievements on the project.

---
_README generated to help recruiters quickly understand the project and for developers to pick up and extend the codebase._
