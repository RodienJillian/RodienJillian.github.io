import { defineConfig, PluginOption } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages project sites are served from `/<repository>/`.
 * User/org sites use the special `<name>.github.io` repo and are served from `/`.
 * Set `GITHUB_REPOSITORY` when building locally to match your repo (e.g. `owner/Portfolio`).
 */
function githubPagesBase(): string {
  const explicit = process.env.BASE_PATH;
  if (explicit) {
    return explicit.endsWith("/") ? explicit : `${explicit}/`;
  }
  const full = process.env.GITHUB_REPOSITORY;
  if (!full) return "/";
  const repo = full.split("/")[1];
  if (!repo) return "/";
  if (repo.toLowerCase().endsWith(".github.io")) return "/";
  return `/${repo}/`;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()] as PluginOption[],
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: githubPagesBase(),
  build: {
    outDir: "dist",
  },
});