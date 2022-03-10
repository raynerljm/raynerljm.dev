module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#72D3B5",
        secondary: "#151242",
        dark: "#0b0b24",
        "dark-2": "#261d49",
        tertiary: "#877cf1",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      animation: {
        // For the landing page loading screen
        typing: "typing 0.8s steps(50, end) forwards",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
