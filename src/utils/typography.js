import Typography from "typography";

const fonts = ["Montserrat", "-apple-system", "Helvetica", "Arial", "sans-serif"];

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: fonts,
  bodyFontFamily: fonts,
});

typography.injectStyles();

export default typography;
