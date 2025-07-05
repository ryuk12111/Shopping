export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',      // ← you can change these
        secondary: '#ec4899',    // ← to your brand colors
      },
    },
  },
  plugins: [],
};
