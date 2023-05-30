import esbuild from 'esbuild'

const context = await esbuild.context({
  entryPoints: ['src/index.tsx'],
  outfile: 'public/dist/index.js',
  bundle: true,
})

await context
  .serve({
    servedir: 'public',
    host: 'localhost',
    port: 3000,
  })
  .then(() => {
    console.log('ready on http://localhost:3000')
  })
