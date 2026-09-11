import { createServer, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { generateStaticPages } from './scripts/static-pages';
let output = 'dist';
export default defineConfig({
  plugins: [react(), {
    name: 'pvs-static-pages',
    apply: 'build',
    configResolved(config) { output = resolve(config.root, config.build.outDir); },
    async closeBundle() {
      const server = await createServer({ configFile: false, plugins: [react()], server: { middlewareMode: true }, appType: 'custom' });
      try {
        const { render } = await server.ssrLoadModule('/entry-server.tsx');
        generateStaticPages(output, render);
      } finally { await server.close(); }
    }
  }],
  server: { host: '0.0.0.0', port: 5000, allowedHosts: true }
});
