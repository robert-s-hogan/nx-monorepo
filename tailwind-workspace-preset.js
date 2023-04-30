module.exports = {
  theme: {
    extend: {
      colors: {
        success: '#00b894',
        error: '#d63031',
        warning: '#fdcb6e',
        info: '#0984e3',
        'react-js': '#087ea4',
        journal: '#0984e3',
        'next-js': '#000000',
        api: '#e10098',
        javascript: '#fcdc00',
        css: '#264de4',
        'chakra-ui': '#4fc8c4',
        'react-query': '#f94354',
        'konva-js': '#0c74b5',
        tailwindcss: '#3490dc',
        terminal: '#000000',
        safari: '#1b99f7',
        antd: '#0170fe',
        typescript: '#3178c6',
        emotion: '#C43BAD',
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
