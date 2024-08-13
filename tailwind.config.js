/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "new-order": ['"new-order"', "sans-serif"],
      },
      colors: {
        pinkCustom: "#FFDDEE",
        redCustom: "#E05F7E",
        grayCustom: "#E9E9E9",
        blueCustom: "#E6F0FF",
        purpleCustom: "#EADDFF",
      },
    },
  },
  plugins: [],
};
