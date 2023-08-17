/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-grey": "hsl(0, 0%, 89%)",
      "dark-grey": "hsl(0, 0%, 59%)",
      "very-dark-grey": "hsl(0, 0%, 17%)",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      backgroundImage: {
        "pattern-desktop": "url('/images/pattern-bg-desktop.png')",
        "pattern-mobile": "url('/images/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
