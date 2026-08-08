const { execSync } = require('child_process');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build succeeded');
} catch (err) {
  console.error('Build failed', err);
}
