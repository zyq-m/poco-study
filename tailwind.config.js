module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        "3xl": [
          "6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028)",
          "22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042)",
          "100px 100px 80px rgba(0, 0, 0, 0.07)",
        ],
      },

      colors: {
        "light-white": "rgb(255, 255, 255, 0.12)",
        "backdrop-color": "rgb(0, 0, 0, 0.30)",
        "btn-success": "rgb(140, 255, 186, 0.24)",
        "btn-danger": "rgb(219, 88, 88, 1)",
      },
    },
    fontSize: {
      xs: "11px",
      s: "14px",
      md: "1.625rem",
      l: "20px",
      xl: "5rem",
    },
  },
  plugins: [],
};
