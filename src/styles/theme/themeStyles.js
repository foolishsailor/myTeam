const colors = {
  midnightGreen: "#014E56",
  lightCoral: "#F67E7E",
  white: "#FFFFFF",
  raptureBlue: "#79C8C7",
  policeBlue: "#2C6269",
  deepJungleGreen: "#004047",
  sacStateGreen: "#012F34",
  darkGreen: "#002529",
};

const font = {
  fontSource:
    "https://fonts.googleapis.com/css2?family=Livvic:wght@600;700&display=swap",

  fontFamily: "Livvic, sans-serif",
  bold: 700,
  semiBold: 600,
  textSmall: {
    fontSize: "15px",
    lineHeight: "25px",
  },
  h1: {
    fontSize: "64px",
    lineHeight: "56px",
    large: {
      fontSize: "100px",
      lineHeight: "100px",
    },
    small: {
      fontSize: "40px",
      lineHeight: "40px",
    },
  },
  h2: {
    small: {
      fontSize: "32px",
      lineHeight: "48px",
    },
  },
  body: {
    small: {
      fontSize: "15px",
      lineHeight: "25px",
    },
  },
};

const breakPoints = {
  mobile: "650px",
  tablet: "1000px",
};

const layout = {
  maxWidth: "1440px",
  paddingWidth: {
    desktop: "14vw",
    tablet: "18vw",
    mobile: "24px",
  },
};

const theme = { colors, font, layout, breakPoints };

export default theme;
