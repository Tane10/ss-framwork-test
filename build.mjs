import { build } from 'esbuild';
import { copyFileSync } from 'fs';

async function main() {
  // Build TypeScript code
  await build({
    entryPoints: ['src/api/index.ts'],
    outfile: 'dist/bundle.js',
    bundle: true,
    platform: 'node',
    target: 'node14',
    sourcemap: true,
  });

  // Copy public folder and index.html to dist
  copyFileSync('public/index.html', 'dist/index.html');

  console.log('Build completed successfully.');
}

main().catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});
