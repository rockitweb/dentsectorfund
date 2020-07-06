// See other presets to try at https://theme-ui.com/packages/presets
import rockitWeb, { sharedHeadingStyles } from "./rockitweb";
import baseColours from "./colors";
export default {
  ...rockitWeb,
  menu: {
    backgroundImage: () => {
      return `linear-gradient(90deg,rgb(255, 255, 255), rgb(255, 255, 255,0.4) 20%, rgb(255, 255, 255,0.3) 100%)`;
    },

    logo: {
      width: ["100px"],
      display: "fixed",

      zIndex: 1000,
    },
  },
  hero: {
    maxWidth: "1290px",
    mx: "auto",
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "white",
      fontSize: [3, 3, 4],
    },
    message: {
      color: "white",
      fontSize: [2, 2, 3],
    },
    image: {
      height: "61.8vh",
      maxHeight: "400px",
    },
  },
  styles: {
    ...rockitWeb.styles,

    h1: {
      ...sharedHeadingStyles,
      textAlign: "left",
      fontSize: 7,
    },
  },
  layout: {
    container: {
      maxWidth: "100%",
      box: {
        maxWidth: "1000px",
        mx: "auto",
        py: [4, 4, 4],
      },
      narrow: {
        maxWidth: ["768px"],
        mx: "auto",
        px: [4, 4, null],
        pb: [4, 4, 4],
      },
    },
  },
  gradients: {
    gray: {
      backgroundImage: () => {
        return `linear-gradient(to right, ${baseColours.neutrals[6]} 30%, ${baseColours.white} 100%);`;
      },
    },
    menu: {
      backgroundImage: () => {
        return `linear-gradient(to left, rgba(255,255,255,0) 5%, rgba(255,255,255,0.3) 50%)`;
      },
    },
  },
  buttons: {
    menu: {
      bg: "primary",
    },
  },
  nav: {
    textAlign: "center",
    link: {
      //borderColor: "white",
      color: "white",
      textTransform: "uppercase",
      textAlign: "center",
      fontSize: [3, 3],
      //borderWidth: "2px",
      "&:hover": {
        color: "secondary",
      },
    },
  },
};
