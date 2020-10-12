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
    color: "primary",
    fontWeight: "heading",
    pr: [0, 0, 4],
    width: "100%",
    logo: {
      width: ["100px"],
      display: "fixed",

      zIndex: 1000,
    },
    scrolled: {
      backgroundColor: "#F5F7FA",
      fontWeight: "heading",
      color: "primary",
      pr: [0, 0, 4],
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
    px: [3, 2, 0],
    heading: {
      pt: 3,
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "primary",
      fontSize: [3, 4, 5],
      pb: 4,
    },
    message: {
      color: "primary",
      fontSize: [2, 5, 4],
      fontFamily: "medium",
      fontWeight: "focus",
    },
    image: {
      height: "61.8vh",
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
      mb: "-20px",
      fontSize: [2, 2, 5],
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
      textAlign: "left",
    },
  },

  layout: {
    container: {
      maxWidth: "100%",
      bg: "extraLight",
      box: {
        maxWidth: "1000px",
        mx: "auto",
        py: [4, 4, 4],
        px: [3, 3, 0],
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
        noPadding: {
          maxWidth: ["768px"],
          mx: "auto",
        },
      },
    },
  },

  buttons: {
    menu: {
      bg: "primary",
    },
    cta: {
      fontSize: [2, 3, 4],
      font: "heading",
      fontWeight: "heading",
      bg: "secondary",
      p: [2, 2, 3],
      px: 4,
      border: 2,
      borderStyle: "solid",
      borderColor: "white",
      borderRadius: 25,
      boxShadow: "inset 0 0 10px #801020",
      secondary: {
        fontSize: [2, 3, 4],
        font: "heading",
        fontWeight: "heading",
        //bg:"white",
        color: "secondary",
        p: [2, 2, 3],
        px: 4,
        border: 2,
        borderStyle: "solid",
        borderColor: "secondary",
        borderRadius: 25,
      },
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
    highlight: {
      textTransform: "uppercase",
      fontSize: [3],
      color: "white",
      fontWeight: "body",
      bg: "secondaryLight",
      py: [2],
      px: 2,
      border: 1,
      //borderStyle: "solid",
      //borderColor: "white",
      borderRadius: 10,
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
      backgroundColor: "white",
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
  footer: {
    bg: "primary",
    color: "white",
    p: 4,
    textAlign: "center",
    a: {
      color: "secondary",
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
        return `linear-gradient(to right, ${baseColours.neutrals[6]} 5%, ${baseColours.neutrals[2]} 95%);`;
      },
    },
    menu: {
      backgroundImage: () => {
        return `linear-gradient(to left, rgba(255,255,255,0) 5%, rgba(255,255,255,0.3) 50%)`;
      },
    },
  },
};
