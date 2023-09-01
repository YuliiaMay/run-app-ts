/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./src/assets/images/HomePageGraphic.png')",
      }),
      fontFamily: {
        logo: ["Faster One", "cursive"],
        orbitron: ["Orbitron", "sans-serif"],
        inria: ["Inria Sans", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/images/EvolveText.png')",
        abstractwaves: "url('./assets/images/AbstractWaves.png')",
        sparkles: "url('./assets/images/Sparkles.png')",
        circles: "url('./assets/images/Circles.png')",
        contactus: "url('./assets/ContactUsPageImg.webp)",
      },
    },
    screens: {
      xs: "320px",
      sm: "768px",
      md: "1280px",
    },
  },
  plugins: [],
};
