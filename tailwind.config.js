/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      primary: "#ef4a23",
      secondary: "#3749bb",
      hfbg: "#081621",
      bbg: "#f2f4f8",
      sbg: "rgba(55,73,187,.05),",
      fc1: "#666",
      fc2: "#fff",
      white: "white",
      black: "black",
    },
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #00237e, #3749bb, #0bc1e9, #3749bb, #00237e)',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        orangeBlink: {
          '0%': { opacity: 0.2, color: '#fff' },
          '10%': { opacity: 0.4, color: '#fff' },
          '20%': { opacity: 0.6, color: "#fff" },
          '30%': { opacity: 0.8, color: "#fff" },
          '40%': { color: "#fff" },
          '50%': { color: "#ef4a23" },
          '60%': { opacity: 0.8, color: "#ef4a23" },
          '70%': { opacity: 0.6, color: "#ef4a23" },
          '80%': { opacity: 0.4, color: "#ef4a23" },
          '90%': { opacity: 0.2, color: "#ef4a23" },
          '100%': { opacity: 0 },
        },
        blink: {
          '0%': { opacity: 0 },
          '10%': { opacity: 0.2 },
          '20%': { opacity: 0.4 },
          '30%': { opacity: 0.6 },
          '40%': { opacity: 0.8 },
          '50%': { opacity: 1 },
          '60%': { opacity: 0.8 },
          '70%': { opacity: 0.6 },
          '80%': { opacity: 0.4 },
          '90%': { opacity: 0.2 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        'gradient-move': 'gradientMove 10s ease-in-out infinite',
        'menu-blink': 'blink 2000ms infinite',
        'top-menu-blink': 'orangeBlink 2000ms infinite',
      },
    },
  },
  plugins: [],
};
