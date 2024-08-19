module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Include files in the pages directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include files in the components directory
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include files in the app directory (for Next.js 13+ App Router)
  ],
  theme: {
    extend: {
      keyframes: {
        "from-left": {
          "0%": {
            zIndex: "20",
            opacity: "0",
            transform: "translate(-20px, -6px)",
          },
          "20%": {
            zIndex: "10",
            opacity: "1",
            transform: "translate(0px, 0px)",
          },
          "40%": { zIndex: "9", transform: "translate(0px, 4px)" },
          "60%": { zIndex: "8", transform: "translate(0px, 8px)" },
          "80%": {
            zIndex: "7",
            opacity: "1",
            transform: "translate(0px, 12px)",
          },
          "100%": {
            zIndex: "5",
            transform: "translate(0px, 30px)",
            opacity: "0",
          },
        },
        "from-right": {
          "0%": {
            zIndex: "20",
            opacity: "0",
            transform: "translate(20px, -6px)",
          },
          "20%": {
            zIndex: "10",
            opacity: "1",
            transform: "translate(0px, 0px)",
          },
          "40%": { zIndex: "9", transform: "translate(0px, 4px)" },
          "60%": { zIndex: "8", transform: "translate(0px, 8px)" },
          "80%": {
            zIndex: "7",
            opacity: "1",
            transform: "translate(0px, 12px)",
          },
          "100%": {
            zIndex: "5",
            transform: "translate(0px, 30px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "from-left": "from-left 4s infinite linear",
        "from-right": "from-right 4s infinite linear",
      },
    },
  },
  plugins: [],
};
