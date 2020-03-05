const theme = {
  maxWidth: "1440px",
  colors: {
    dark: "#333644",
    black: "#000000",
    white: "#FFFFFF",
    darkenedWhite: "#EFEAEA",
    red: "#E86D70",
    brightRed: "#FAE7E8",
    hoveredRed: "#D76366",
    darkBlue: "#424555",
    hoveredBlue: "#414353",
    lightGrey: "#C4C4C9",
    mediumGrey: "#BEBFC4",
    darkGrey: "#D7D7DA",
    thinGrey: "#A8B2D1",
    footer: "#282A33",
    loadingBack: "#2A2C37",
  },
  fontSizes: {
    xs: "16px",
    sm: "19px",
    xl: "67px",
  },
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

export default theme;
