/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Casagrandecasabau Ultra"', "Arial", "sans-serif"],
      },
    },
    textShadow: {
      "heading-1": "4.64px 6.19px #000000",
      "heading-2": "3px 4px #eeebe2",
      "heading-3": "4.54px 6.06px #eeebe2",
    },
    textStrokeWidth: {
      "h1-mobile": "2.5px",
      "h1-desktop": "3.1px",
      "h2-mobile": "3px",
      "h2-desktop": "3.05px",
      h3: "3px",
    },
    textStrokeColor: {
      black: "#000000",
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );

      matchUtilities(
        {
          "text-stroke": (value) => ({
            WebkitTextStrokeWidth: value,
            WebkitTextStrokeColor: theme("textStrokeColor.black"),
          }),
        },
        { values: theme("textStrokeWidth") }
      );
    }),
  ],
};
