import { defineConfig } from 'tsup';

export default defineConfig(({ watch }) => ({
  entryPoints: ['src/main.ts'],
  splitting: true,
  format: ['esm', 'cjs'],
  dts: false,
  clean: true,
  sourcemap: true,
  minify: true,
  onSuccess: watch
    ? 'node --enable-source-maps dist/main.js --inspect'
    : undefined,
}));
