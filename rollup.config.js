import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default [
    {
        input: 'src/main.js',
        output: {
            sourcemap: true,
            name: 'app',
            file: 'public/bundle.js'
        },
        plugins: [
            svelte({
                compilerOptions: {
                    customElement: true
                },
                preprocess: autoPreprocess({
                    sourceMap: true
                })
            }),
            typescript({
                sourceMap: true,
                inlineSources: true
            }),
            resolve({
                browser: true,
                dedupe: ['svelte']
            }),
            commonjs(),
            serve({
                contentBase: 'public',
                host: 'localhost',
                port: 8080
            }),
            livereload('public'),
            terser({
                format: {
                    comments: '/.*webpackIgnore.*/'
                }
            })
        ],
        watch: {
            clearScreen: false
        }
    }
]