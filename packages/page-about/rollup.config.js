import babel from 'rollup-plugin-babel';

export default {
  input: './components/PageAbout',
  output: {
    file: './dist/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: [
    'react',
    'react-bootstrap/Card',
    'react-bootstrap/CardDeck',
    'react-bootstrap/Jumbotron',
    'react-bootstrap/Button',
    'react-bootstrap/Modal'
  ]
}