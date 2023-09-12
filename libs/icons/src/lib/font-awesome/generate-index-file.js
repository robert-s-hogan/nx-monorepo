const fs = require('fs');
const path = require('path');

const ICON_DIR = path.join(__dirname, './'); // Adjust the path if needed

fs.readdir(ICON_DIR, (err, files) => {
  if (err) {
    console.error('Failed to list files in directory:', err);
    return;
  }

  const exports = files
    .filter((file) => path.extname(file) === '.tsx') // Assuming the icons are .tsx files
    .map((file) => {
      const baseName = path.basename(file, '.tsx');
      return `export { default as ${baseName} } from './lib/font-awesome/${baseName}';`;
    });

  fs.writeFileSync(
    path.join(ICON_DIR, 'index.ts'),
    exports.join('\n'),
    'utf-8'
  );
  console.log('Index file generated successfully!');
});
