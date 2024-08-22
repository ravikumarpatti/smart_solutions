module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Include files in the pages directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include files in the components directory
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include files in the app directory (for Next.js 13+ App Router)
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        wave: "wave 12s infinite linear",
      },
    },
  },
  plugins: [],
};
