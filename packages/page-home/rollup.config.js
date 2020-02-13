import babel from 'rollup-plugin-babel';

export default {
  input: './src/components/PageHome',
  output: {
    file: './dist/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['react']
}