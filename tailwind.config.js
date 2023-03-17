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
          light: "",
          dark: "",
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
          light: "",
          dark: "",
        },
        warning: {
          light: "",
          dark: "",
        },
        error: {
          light: "",
          dark: "",
        },
        surface: {
          light: "",
          dark: "",
        },
      },
    },
  },
  plugins: [],
};
