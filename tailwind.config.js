/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        blackRedGradient:
          "linear-gradient(145deg, rgb(255, 13, 79), rgb(0, 0, 0));",
        "black-transparent-gradient":
          "linear-gradient(0deg, rgb(0, 0, 0), transparent);",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
