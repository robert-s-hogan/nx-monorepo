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

function transformSvgAttributes(attributes) {
  // Convert SVG attributes to their React equivalent
  return attributes
    .replace(/strokeWidth="/g, 'strokeWidth="')
    .replace(/stroke-linecap="/g, 'strokeLinecap="')
    .replace(/stroke-linejoin="/g, 'strokeLinejoin="')
    .replace(/className="/g, 'className="');
}

function createComponentTemplate(name, svgContent) {
  // Extract SVG attributes and contents
  const attributesMatch = svgContent.match(/<svg ([^>]+)>/);
  let attributes = attributesMatch ? attributesMatch[1] : '';
  const cleanedSvgContent = svgContent
    .replace(/<svg [^>]+>/, '')
    .replace('</svg>', '');

  // Transform SVG attributes to their React equivalent
  attributes = transformSvgAttributes(attributes);

  // Avoid attribute duplication
  const redundantAttributes = [
    'xmlns="http://www.w3.org/2000/svg"',
    'viewBox="0 0 24 24"',
  ];
  redundantAttributes.forEach((attr) => {
    attributes = attributes.replace(attr, '');
  });

  // Remove hardcoded className attribute
  const classNameRegex = /className="[^"]+"/;
  attributes = attributes.replace(classNameRegex, '');

  function camelToKebab(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  }

  const kebabName = camelToKebab(name);

  return `
  import IconWrapper from '../IconWrapper';
  import { CommonProps } from '@with-nx/types';
  
  const ${name}Icon = (props: CommonProps) => {
    const svgClassNames = ['font-awesome', '${kebabName}'];
    const combinedClassNames = [...svgClassNames, props.className].join(' ');
  
    // Ensure className is not passed again in the spread operation
    const { className, ...otherProps } = props;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ${attributes.trim()}
        className={\`feather ${kebabName} \${combinedClassNames}\`}
        {...props}
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

      const componentName =
        'Feather' + capitalizeFirstLetter(path.basename(file, '.svg'));
      const componentContent = createComponentTemplate(
        componentName,
        svgContent
      );

      fs.writeFileSync(
        path.join(OUTPUT_DIR, `${componentName}.tsx`),
        componentContent,
        'utf-8'
      );
    }
  });

  console.log('React components generated successfully!');
});

function capitalizeFirstLetter(string) {
  return string
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
