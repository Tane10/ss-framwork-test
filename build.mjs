import { build } from 'esbuild';

async function main() {
  try {
    // Build TypeScript code
    const result = await build({
      entryPoints: ['src/index.ts'],
      outdir: 'dist',
      bundle: true,
      platform: 'node',
      target: 'node18',
      sourcemap: true,
      logLevel: 'error',
    });

    // Copy public folder and index.html to dist
    // cp('./public/', 'dist/public', (error) => console.log(error));

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
