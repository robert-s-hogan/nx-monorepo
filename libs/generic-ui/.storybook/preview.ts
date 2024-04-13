// .storybook/preview.ts
import '../src/styles.css'; // Your Tailwind CSS import

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      state: 'open', // This should automatically show the source code
    },
    // Ensure the Docs addon is correctly loaded
    transformSource: (src: string, storyContext: { id: string }) => {
      // You can transform the source code displayed here if necessary
      return src;
    },
  },
};
