// See https://tailwindcss.com/docs/configuration for details
module.exports = {
    theme: {
      extend: {
        colors: {
          primary: '#002868',
          secondary: '#BF0A30',
          tertiary: '#FFD700',
          background: '#FFFFFF'
        }
      }
    },
    future: {
      removeDeprecatedGapUtilities: true,
    },
  purge: ["./src/**/*.js"],
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
