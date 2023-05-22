import { build } from 'esbuild';
import { copyFileSync } from 'fs';

async function main() {
  try {
    // Build TypeScript code
    const result = await build({
      entryPoints: ['src/api/index.ts'],
      outfile: 'dist/bundle.js',
      bundle: true,
      platform: 'node',
      target: 'node18',
      sourcemap: true,
      logLevel: 'error',
    });

    // Copy public folder and index.html to dist
    copyFileSync('public/index.html', 'dist/index.html');

    if (result.errors.length > 0) {
      console.error('Build failed with compile errors:');
      result.errors.forEach((error) => {
        console.error(error.text);
      });
      process.exit(1);
    }

    console.log('Build completed successfully.');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

main();
