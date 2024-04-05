/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        error: "#DC3545",
        bgRed: "#FD5334",
        violet: "#7025FB",
        "light-green": "#E9FAF1",
      },
    },
  },
  plugins: [],
};
