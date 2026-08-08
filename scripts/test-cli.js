const { spawnSync } = require('child_process');
const result = spawnSync('npx.cmd', ['electron', '.', '--cli', '--help'], { encoding: 'utf8' });
console.log('STATUS:', result.status);
console.log('STDOUT:', result.stdout);
console.log('STDERR:', result.stderr);
