import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const config = {
	input: 'src/index.js',
	output: [
		{ file: 'dist/index.js', format: 'cjs' },
		{ file: 'dist/index.esm.js', format: 'esm' },
	],
	plugins: [
		resolve({
			extensions: ['.js', '.jsx'],
		}),
		babel({
			presets: ['@babel/preset-env', '@babel/preset-react'],
			babelHelpers: 'bundled',
			exclude: 'node_modules/**', // Exclude node_modules
			extensions: ['.js', '.jsx'],
		}),
		commonjs(),
	],
	external: ['react', 'react-dom', '@react-three/fiber', 'three'],
}

export default config
