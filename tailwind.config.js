// See https://tailwindcss.com/docs/configuration for details
module.exports = {
    
    future: {
      removeDeprecatedGapUtilities: true,
    },
  purge: ["./src/**/*.js"],
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
