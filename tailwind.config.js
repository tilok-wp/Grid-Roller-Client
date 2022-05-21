module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        gridrollertheme: {
          primary: "#57AC51",
          secondary: "#3A8939",
          accent: "#22223b",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "gridrollertheme",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}
