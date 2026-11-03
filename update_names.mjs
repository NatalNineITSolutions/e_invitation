import fs from 'fs';

let env = fs.readFileSync('.env', 'utf8');

env = env.replace(
  'VITE_COUPLE_NAMES="Abinaya & Arunkumar"',
  'VITE_COUPLE_NAMES="Arun, Abinaya, Bhavish & Tejas"'
);

env = env.replace(
  'VITE_DISPLAY_NAMES="Abinaya & Arunkumar"',
  'VITE_DISPLAY_NAMES="Arun, Abinaya, Bhavish & Tejas"'
);

fs.writeFileSync('.env', env, 'utf8');
console.log('Updated names in .env');

