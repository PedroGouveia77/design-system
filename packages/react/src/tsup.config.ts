import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: {
    resolve: true, // Garante que os tipos sejam resolvidos e incluídos no bundle
  },
  clean: true,
  external: ['react'],
  sourcemap: true,
  skipNodeModulesBundle: true,
  esbuildOptions(options) {
    // Evita erro de importação de tipos internos como @stitches/react/types/styled-component
    options.external ??= []
    options.external.push('@stitches/react/types/styled-component')
    options.external.push('@stitches/react/types/css-util')
  },
})
