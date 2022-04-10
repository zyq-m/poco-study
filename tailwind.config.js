module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      dropShadow: {
        "3xl": [
          "0px 3.4px 2.7px rgba(0, 0, 0, 0.022)",
          "0px 8.7px 6.9px rgba(0, 0, 0, 0.031)",
          "0px 17.7px 14.2px rgba(0, 0, 0, 0.039)",
          "0px 36.5px 29.2px rgba(0, 0, 0, 0.048)",
          "0px 100px 80px rgba(0, 0, 0, 0.07)",
        ],
      },

      boxShadow: {
        "3xl": [
          "0px 3.4px 2.7px rgba(0, 0, 0, 0.022)",
          "0px 8.7px 6.9px rgba(0, 0, 0, 0.031)",
          "0px 17.7px 14.2px rgba(0, 0, 0, 0.039)",
          "0px 36.5px 29.2px rgba(0, 0, 0, 0.048)",
          "0px 100px 80px rgba(0, 0, 0, 0.07)",
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
