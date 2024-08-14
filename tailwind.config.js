/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "new-order": ['"new-order"', "sans-serif"],
        "plus-jakarta": ['"plus-jakarta-sans"', "sans-serif"],
      },
      colors: {
        pinkCustom: "#FFDDEE",
        redCustom: "#E05F7E",
        grayCustom: "#E9E9E9",
        blueCustom: "#E6F0FF",
        purpleCustom: "#EADDFF",
        darkBlueCustom: "#05285B",
        lightBlueCustom: "#00BEF2",
      },
      borderRadius: {
        "3xl": "28px",
      },
    },
  },
  plugins: [],
};
