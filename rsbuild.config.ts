import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    proxy: {
      '/api': 'back-end-aqui-oh-atualizado-production.up.railway.app:8080'
    }
  }
});
