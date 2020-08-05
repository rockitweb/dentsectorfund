// See other presets to try at https://theme-ui.com/packages/presets
import rockitWeb, {
  sharedHeadingStyles,
  sharedFormElementStyles,
} from "./rockitweb";
import baseColours from "./colors";
export default {
  ...rockitWeb,
  menu: {
    backgroundImage: () => {
      return `linear-gradient(90deg,rgb(255, 255, 255), rgb(255, 255, 255,0.4) 20%, rgb(255, 255, 255,0.3) 100%)`;
    },
    color: "white",
    fontWeight: "heading",
    pr: 4,
    width: "100%",
    logo: {
      width: ["100px"],
      display: "fixed",

      zIndex: 1000,
    },
    scrolled: {
      backgroundColor: "white",
      fontWeight: "heading",
      color: "primary",
      pr: 4,
      width: "100%",
      logo: {
        width: ["100px"],
        display: "fixed",

        zIndex: 1000,
      },
    },
  },
  hero: {
    maxWidth: "1000px",
    mx: "auto",
    pt: 5,
    heading: {
      pt: 3,
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "white",
      fontSize: [3, 3, 4],
      pb: 4,
    },
    message: {
      color: "white",
      fontSize: [2, 2, 5],
      fontFamily: "medium",
      fontWeight: "focus",
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
    h2: {
      ...sharedHeadingStyles,

      fontSize: [2, 2, 3],
    },
  },
  section: {
    heading: {
      ...sharedHeadingStyles,

      fontSize: [2, 2, 5],
      textAlign: "left",
      py: [3, 3, 4],
    },
    description: {
      textAlign: "center",
    },
  },

  layout: {
    container: {
      maxWidth: "100%",
      box: {
        maxWidth: "1000px",
        mx: "auto",
        py: [4, 4, 4],
        noPadding: {
          maxWidth: "1000px",
          mx: "auto",
        },
      },
      narrow: {
        maxWidth: ["768px"],
        mx: "auto",
        px: [4, 4, null],
        pb: [4, 4, 4],
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

      textTransform: "uppercase",
      textAlign: "center",
      fontSize: [3, 3],
      //borderWidth: "2px",
      "&:hover": {
        color: "secondary",
      },
    },
  },
  cta: {
    fontWeight: "heading",
    fontFamily: "heading",
    fontSize: [3],
  },
  image: {
    teamMember: {
      flexShrink: 0,
      width: "100%",
      height: "14rem",
      borderRadius: ".5rem",
      objectFit: "cover",
      objectPosition: "center",
      mb: [2, 2, 0],
    },
    circle: {
      width: "20%",
      height: "auto",
      minWidth: "150px",
      float: "left",
      mr: "2rem",
      borderRadius: "50%",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      shapeOutside: "circle()",
    },
  },
  forms: {
    label: {
      fontSize: ".75rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: 0.5,
      color: "text",
      mb: 1,
      //block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2
    },
    input: {
      ...sharedFormElementStyles,
      backgroundColor: "white",
    },
    select: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      ...sharedFormElementStyles,
    },
    slider: {
      bg: "muted",
    },
    validationError: {
      fontStyle: "italic",
      fontSize: ".75rem",
      color: "error",
    },
  },

  gradients: {
    primary: {
      backgroundImage: () => {
        return `linear-gradient(to right, ${baseColours.primary[6]} 10%, ${baseColours.primary[3]} 100%);`;
      },
    },
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
};
