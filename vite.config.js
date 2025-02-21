// <reference types="vite" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
const pkg = require('./package.json');
const package_version = pkg.version;
const package_name = pkg.name;
const outputHeader = ()=>{
  const currentDate = new Date().toISOString();
  return `/*! ${package_name} v${package_version} | ${currentDate} */`;
};
export default defineConfig({
  base: '/', // Set the base URL for the application
  publicDir: true, // Disable the default asset folder
  server: {
    port: 3000, // Set the port for the dev server
    https: false,  // Enable HTTPS for the dev server
    host: '0.0.0.0',
    //open: true, // Set the browser to automatically open
    watch: {
      ignored: ['node_modules/**', 'dist/**', '.git/**', 'test/**'],
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      //entry: resolve(__dirname, 'src/index.ts'),
      entry: resolve('index.html'),
      name: 'demoRedux',
      // the proper extensions will be added
      fileName: 'demoRedux',
      formats: ['cjs', 'es', 'iife', 'umd'],
    },
    // Set the directory for the built assets (relative to outDir)
    // assetsDir: 'public',
    emptyOutDir: true,
    outDir: './dist', // Set the output directory for the built files
    sourcemap: false,
    // // Set the public path for the built assets
    publicPath: '/',
    // minify: false,
    minify: 'terser', // 'terser' or false
    terserOptions: {
      ecma: 5, // specify one of: 5, 2015, 2016, etc.
      enclose: false, // or specify true, or "args:values"
      keep_classnames: false,
      keep_fnames: false, // keep original function names
      ie8: false,
      module: false,
      nameCache: null, // or specify a name cache object
      safari10: true,
      toplevel: false,
      sourceMap: false,
      compress: {
        negate_iife: true,
        reduce_vars: false,
        reduce_funcs: false,
        drop_console: false,
      },
      output: {
        preamble: outputHeader(),
        wrap_iife: false,
        beautify: false,
        comments: false,
      },
    },
    esbuild: {},
    // Configure the rollup options
    rollupOptions: {},
  },
});
