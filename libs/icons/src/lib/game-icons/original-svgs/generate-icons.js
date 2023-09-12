const fs = require('fs');
const path = require('path');

// Directory containing the SVGs
const SVG_DIR = './';

// Output directory for the React components
const OUTPUT_DIR = path.join(__dirname, '../');

// Check and create the output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
function createComponentTemplate(name, className, svgContent) {
  const cleanedSvgContent = svgContent
    .replace(/<svg [^>]+>/, '')
    .replace('</svg>', '')
    // Set the fill of all paths to currentColor
    .replace(
      /<path([^>]*)fill="[^"]*"([^>]*)>/g,
      '<path$1fill="currentColor"$2>'
    )
    // If the path doesn't have a fill attribute, add it with currentColor
    .replace(/<path((?!fill=).)*>/g, '<path fill="currentColor"$1>');

  return `
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const ${name}Icon = (props: CommonProps) => {
    const svgClassNames = ['game-icon', '${className}'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className: propClassName, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={\`game-icon \${combinedClassNames}\`}
        {...otherProps}
      >
        ${cleanedSvgContent}
      </svg>
    );
  };
  
  export default IconWrapper(${name}Icon);
    `;
}

// Read all SVGs from the directory
fs.readdir(SVG_DIR, (err, files) => {
  if (err) {
    console.error('Failed to list files in directory:', err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === '.svg') {
      const svgFilePath = path.join(SVG_DIR, file);
      const svgContent = fs.readFileSync(svgFilePath, 'utf-8');

      const baseName = path.basename(file, '.svg');
      const componentName = 'GameIcon' + capitalizeFirstLetter(baseName);
      const componentContent = createComponentTemplate(
        componentName,
        baseName,
        svgContent
      );

      fs.writeFileSync(
        path.join(OUTPUT_DIR, `${componentName}.tsx`),
        componentContent,
        'utf-8'
      );
    }
  });

  console.log('React components for game-icons generated successfully!');
});

function capitalizeFirstLetter(string) {
  return string
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
