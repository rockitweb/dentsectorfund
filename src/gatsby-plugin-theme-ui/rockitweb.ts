import baseColours from "./colors";

const sharedHeadingStyles = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  textTransform: "uppercase",
};

const RockitWeb = {
  colors: {
    primary: baseColours.primary[5],
    primaryLight: baseColours.primary[1],
    primaryDark: baseColours.primary[6],
    secondary: baseColours.secondary[5],
    background: baseColours.white,
    textMuted: baseColours.neutrals[6],
    text: baseColours.neutrals[8],
    textLight: baseColours.white,
    dark: baseColours.neutrals[7],
    light: baseColours.neutrals[3],
    extraLight: baseColours.neutrals[2],

    error: baseColours.supportingB[7],
  },

  breakpoints: ["768px", "1025px", "1290px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "'Open Sans', Helvetica, Arial, sans-serif",
    heading: "Roboto, Montserrat, system-ui, sans-serif",
    monospace: "Menlo, monospace",
    siteTitle: "orbitron,Roboto, Montserrat, system-ui, sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 2,
    },
    hero: {
      ...sharedHeadingStyles,
      fontSize: 6,
      color: "#dark",

      subHeading: {
        ...sharedHeadingStyles,
        letterSpacing: "0.1em",
        fontWeight: "normal",
        fontSize: 2,
        color: baseColours.white,
      },
      message: {
        color: "dark",
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
        fontSize: [3],
      },
    },

    h1: {
      ...sharedHeadingStyles,
      textAlign: "center",
      fontSize: 5,
    },
    h2: {
      ...sharedHeadingStyles,
      textAlign: "center",
      fontSize: 5,
      pt: 1,
      pb: 1,
    },
    h3: {
      ...sharedHeadingStyles,
      fontSize: 3,
    },
    h4: {
      ...sharedHeadingStyles,
      fontSize: 2,
    },
    h5: {
      ...sharedHeadingStyles,
      fontSize: 1,
    },
    h6: {
      ...sharedHeadingStyles,
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 2,
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      nomargin: {
        color: "text",
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
        fontSize: 2,
      },
    },
    a: {
      color: "primary",
      fontSize: [3, 2],
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
    ul: {
      listStyleType: "disc",
      pl: 4,
    },
    blockquote: {
      ml: 4,
      backgroundColor: "primaryLight",
      px: 3,
      py: 1,
      borderLeft: (t) => `8px solid ${t.colors.primary}`,
      borderRadius: "4px",
      p: { color: "dark" },
    },
  },
};

export default RockitWeb;