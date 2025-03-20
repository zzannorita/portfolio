/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "Arial", "sans-serif"],
        retro: ["DungGeunMo", "serif"],
        logo: ["Tenada", "Arial", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 1px 9px rgba(0, 0, 0, 0.2)",
      },
    },
  },
};
