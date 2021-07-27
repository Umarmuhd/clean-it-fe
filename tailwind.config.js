module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1890ff",
        secondary: "#F5F6FA",
        ashcolor: "#CCCCCC",
        borderbg: "#d9d9d9",
        blackcolor: "rgba(0,0,0,.85)",
        borderblue: "rgb(145, 213, 255)",
        borderBottom: "#e8e8e8",
        ashtext: "rgba(0, 0, 0, 0.45)",
        ashtext2: "rgba(0, 0, 0, 0.65)",
        ashtext3: "rgba(0, 0, 0, 0.25)",
        tableheadbg: "#fafafa",
        bodycolor: "#F2F2F2",
      },
      minHeight: {
        60: "60vh",
        95: "95vh",
        48: "48px",
        478: "478px",
      },
      borderRadius: {
        "4xl": "20px",
      },
      fontSize: {
        "1xl": ["1.3rem", { lineHeight: "1.5rem" }],
        "2.5xl": ["1.63rem", { lineHeight: "1.5rem" }],
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
