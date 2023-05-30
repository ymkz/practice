import esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/index.tsx'],
  outfile: 'public/dist/index.js',
  bundle: true,
})
