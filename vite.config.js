import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static build output in ./dist — deploys to Cloudflare Pages as-is.
// `npm run deploy` builds and publishes with wrangler.
export default defineConfig({
  plugins: [react()],
});
