const fs = require('fs');
const path = require('path');

const SVG_DIR = './';
const OUTPUT_DIR = path.join(__dirname, '../');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function transformSvgAttributes(attributes) {
  return attributes
    .replace(/stroke-width="/g, 'strokeWidth="')
    .replace(/stroke-linecap="/g, 'strokeLinecap="')
    .replace(/stroke-linejoin="/g, 'strokeLinejoin="')
    .replace(/class="/g, 'className="');
}

function formatClassName(string) {
  return string
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(''); // To capitalize
}

function formatIconName(string) {
  return 'fa-' + string.toLowerCase(); // To have the 'fa-' prefix and all lowercase
}

function createComponentTemplate(name, svgContent) {
  const attributesMatch = svgContent.match(/<svg ([^>]+)>/);
  let attributes = attributesMatch ? attributesMatch[1] : '';
  const cleanedSvgContent = svgContent
    .replace(/<svg [^>]+>/, '')
    .replace('</svg>', '');

  attributes = transformSvgAttributes(attributes);

  const redundantAttributes = [
    'xmlns="http://www.w3.org/2000/svg"',
    'viewBox="0 0 24 24"',
  ];
  redundantAttributes.forEach((attr) => {
    attributes = attributes.replace(attr, '');
  });

  const classNameRegex = /className="[^"]+"/;
  attributes = attributes.replace(classNameRegex, '');

  const viewBoxMatch = svgContent.match(/viewBox="[^"]+"/);
  const viewBoxAttribute = viewBoxMatch
    ? viewBoxMatch[0]
    : 'viewBox="0 0 24 24"';

  return `
import IconWrapper from '../IconWrapper';
import { CommonProps } from '@with-nx/types';

const ${name}Icon = (props: CommonProps) => {
  const svgClassNames = ['font-awesome', '${formatIconName(name.slice(2))}'];
  const combinedClassNames = [...svgClassNames, props.className].join(' ');
  const { className, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ${viewBoxAttribute}
      ${attributes.trim()}
      className={\`fa ${formatIconName(name.slice(2))} \${combinedClassNames}\`}
      {...otherProps}
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --> */}
      ${cleanedSvgContent}
    </svg>
  );
};

export const ${name} = IconWrapper(${name}Icon);
  `;
}

fs.readdir(SVG_DIR, (err, files) => {
  if (err) {
    console.error('Failed to list files in directory:', err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === '.svg') {
      const svgFilePath = path.join(SVG_DIR, file);
      const svgContent = fs.readFileSync(svgFilePath, 'utf-8');

      const componentName = 'Fa' + formatClassName(path.basename(file, '.svg'));
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
