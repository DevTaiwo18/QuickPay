module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: 'rgb(249,247,5)',
      },

      height: {
        fit: 'fit-content',
      },

      margin: {
        auto: 'auto',
        full: '100%',
      },

      stroke: {
        warning: '#ffc107',
        error: '#dc3545',
        success: '#60A5FA',
        info: '#0dcaf0',
      },
    },
  },
  plugins: [],
}
