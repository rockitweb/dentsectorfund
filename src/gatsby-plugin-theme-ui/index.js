// See other presets to try at https://theme-ui.com/packages/presets
import rockitWeb from "./rockitweb";
import baseColours from "./colors";
export default {
  ...rockitWeb,
  menu: {
    backgroundImage: () => {
      return `linear-gradient(to left, rgba(255,255,255,0) 5%, rgba(255,255,255,0.3) 50%)`;
    },
    
    logo: {
      width: ["200px"],
      mb: ["-25px"],
      mt: [2]
    },
  },
  hero: {
    maxWidth: "1290px",
    mx: "auto",
    heading: {
      color: "white",
      fontSize: [3, 3, 5],
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
  },
  layout: {
    container: {
      maxWidth: "100%",
      box: {
        maxWidth: "1290px",
        mx: "auto",
        py: [4, 4, 4],
      },
      narrow: {
        maxWidth: ["768px"],
        mx: "auto",
        px: [4, 4, null],
        py: [4, 4, 4],
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
};
