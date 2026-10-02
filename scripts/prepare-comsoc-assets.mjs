import { cpSync, mkdirSync } from 'node:fs';

const target = 'dist/ComSoc';

mkdirSync(target, { recursive: true });
cpSync('dist/_astro', `${target}/_astro`, { recursive: true });
cpSync('public/favicon.png', `${target}/favicon.png`);
cpSync('public/fonts', `${target}/fonts`, { recursive: true });
cpSync('public/img', `${target}/img`, { recursive: true });
