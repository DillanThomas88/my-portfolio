module.exports = {
  content: ["./src/**/*.{html,js,json,css}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Montserrat"],
      },
      gridTemplateColumns: {
        // custom grid setup
        50: "repeat(50, minmax(0, 1fr))",
      },
      animation: {
        appear: "appear 1s forwards",
        delay: "delay 3s forwards",
        disapear: "appear .25s reverse forwards",
        select: "navigation .5s forwards",
        grow: "scale .15s forwards",
        drift: "appear 3s reverse linear forwards",
        driftSpin: "spin 200s linear infinite",
        fall: "down 200s alternate infinite",
        right: "right 12s linear infinite",
        right2: "right2 12s linear infinite",
        slideright: "slide .25s forwards",
      },
      keyframes: {
        appear: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        delay: {
          "0%": { opacity: 0 },
          "25%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slide: {
          from: { transform: "translateX(3rem)", opacity: 0 },
          to: { transform: "transformX(0rem)", opacity: 1 },
        },
        right: {
          "0%": { transform: "translateX(-300em)", opacity: 0 },
          "5%": { transform: "translateX(-300rem)", opacity: 0 },
          "10%": { transform: "translateX(-.5rem)", opacity: 1 },
          "45%": { transform: "translateX(-.25rem)", opacity: 1 },
          "100%": { transform: "translateX(0rem)", opacity: 0 },
          // "100%": { transform: "translateX(5rem)", opacity: 0 },
        },
        right2: {
          "0%": { transform: "translateX(300em)", opacity: 0 },
          "10%": { transform: "translateX(300rem)", opacity: 0 },
          "15%": { transform: "translateX(.5rem)", opacity: 1 },
          "42.5%": { transform: "translateX(.25rem)", opacity: 1 },
          "100%": { transform: "translateX(0em)", opacity: 0 },
          // "100%": { transform: "translateX(-5rem)", opacity: 0 },
        },
        navigation: {
          from: { transform: "scaleX(0)", opacity: 0 },
          to: { transform: "scaleX(1)", opacity: 1 },
        },
        scale: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.25)" },
        },
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        down: {
          from: { transform: "translateY(0px)" },
          to: { transform: "translateY(400px)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
