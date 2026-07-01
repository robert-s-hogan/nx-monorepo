// scripts/eslint-plugin-tailwind-custom-colors.js
export const rules = {
  'no-non-theme-tailwind-colors': {
    create(context) {
      const disallowedRegex =
        /\b(?:text|bg|border)-(?:red|green|blue|gray|yellow|purple|pink|indigo|emerald|lime|amber|teal|cyan|fuchsia|violet)-(?:100|200|300|400|500|600|700|800|900)\b/;

      return {
        Literal(node) {
          if (
            typeof node.value === 'string' &&
            disallowedRegex.test(node.value)
          ) {
            context.report({
              node,
              message:
                'Avoid using non-theme Tailwind colors. Use theme tokens like text-error, bg-primary, etc.',
            });
          }
        },
      };
    },
  },
};
