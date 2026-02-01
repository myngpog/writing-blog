import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { blogManifestPlugin } from './plugins/blog-manifest-plugin';

export default defineConfig({
  plugins: [react(), tailwindcss(), blogManifestPlugin('entries')],
});
