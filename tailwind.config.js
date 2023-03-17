/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#EF46BC",
          dark: "#E767C0",
        },
        secondary: {
          light: "",
          dark: "",
        },
        tertiary: {
          light: "",
          dark: "",
        },
        success: {
          light: "#23A30F",
          dark: "#85F273",
        },
        warning: {
          light: "#F5D422",
          dark: "#FFEB7C",
        },
        error: {
          light: "#EF3726",
          dark: "#FF8579",
        },
        surface: {
          light: {
            50: "#FBF9FA",
            100: "#E2E0E2",
            200: "#CAC8C9",
            300: "#B2AFB1",
            400: "#999798",
            500: "#807E80",
            600: "#686667",
            700: "#504D4F",
            800: "#373536",
            900: "#201C1E",
          },

          dark: {
            50: "#151215",
            100: "#2E2B2E",
            200: "#474447",
            300: "#605E60",
            400: "#797779",
            500: "#929091",
            600: "#ABA9AA",
            700: "#C3C3C3",
            800: "#DCDCDC",
            900: "#F5F5F5",
          },
        },
      },
    },
  },
  plugins: [],
};
