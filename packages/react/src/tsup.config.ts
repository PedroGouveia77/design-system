import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.tsx'], // Aqui estamos especificando que todos os arquivos .tsx dentro de src devem ser usados
  format: ['esm', 'cjs'],
  dts: true, // Geração de tipos
  external: ['react', 'react-dom'], // Garanta que o React e o ReactDOM não sejam empacotados
  clean: true, // Limpeza de arquivos de build antigos
  sourcemap: true,
  skipNodeModulesBundle: true,
  esbuildOptions(options) {
    // Evita erro de importação de tipos internos como @stitches/react/types/styled-component
    options.external ??= []
    options.external.push('@stitches/react/types/styled-component')
    options.external.push('@stitches/react/types/css-util')
  },
})
