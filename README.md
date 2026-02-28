# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # React Todo App

    This is a small Todo application built with React, TypeScript and Vite. It provides a minimal, production-ready example including local persistence, filtering and basic accessibility.

    **Main features**
    - Add todos with a title
    - Toggle completion status
    - Delete individual todos
    - Filter todos by All / Active / Completed
    - Clear all completed todos
    - Persistence via `localStorage`

    Files of interest
    - `src/App.tsx` — app shell and state management
    - `src/Components` — `TodoForm`, `TodoList`, `TodoItem`, `TodoFilter`
    - `src/hooks/useLocalStorage.ts` — localStorage-backed state hook

    Development

    1. Install dependencies:

    ```bash
    npm install
    ```

    2. Run the dev server with hot reload:

    ```bash
    npm run dev
    ```

    3. Lint the project:

    ```bash
    npm run lint
    ```

    Build & Deployment

    Create a production build and preview it locally:

    ```bash
    npm run build
    npm run preview
    ```

    The `dist/` folder contains the production-ready static assets produced by Vite and can be deployed to any static hosting provider (Netlify, Vercel, GitHub Pages, or a plain web server).

    Usage

    - Type a task into the input and press `Add` or Enter to create a todo.
    - Click a todo text to toggle completion.
    - Use the filter buttons to switch between views.
    - Click `Clear Completed` to remove finished tasks.

    Accessibility & Notes

    - Buttons expose `aria-pressed` where relevant and inputs include `aria-label` for assistive technologies.
    - Todos are persisted to `localStorage` under the `todos` key.

    If you'd like, I can add CI deployment config (GitHub Actions) or a small test suite next.
