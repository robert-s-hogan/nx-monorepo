module.exports = {
  theme: {
    extend: {
      colors: {
        success: '#00b894',
        error: '#d63031',
        warning: '#fdcb6e',
        info: '#0984e3',
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
