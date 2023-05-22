module.exports = {
  theme: {
    extend: {
      colors: {
        antd: '#0170fe',
        api: '#e10098',
        'chakra-ui': '#4fc8c4',
        css: '#264de4',
        emotion: '#C43BAD',
        error: '#d63031',
        github: '#000000',
        info: '#0984e3',
        javascript: '#fcdc00',
        jest: '#c2a813',
        journal: '#0984e3',
        'konva-js': '#0c74b5',
        'next-js': '#000000',
        'react-js': '#087ea4',
        'react-query': '#f94354',
        safari: '#1b99f7',
        storybook: '#ff4785',
        success: '#00b894',
        tailwindcss: '#3490dc',
        terminal: '#000000',
        typescript: '#3178c6',
        warning: '#fdcb6e',
      },
    },
  },
  variants: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
