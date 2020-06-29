// See other presets to try at https://theme-ui.com/packages/presets
import rockitWeb from "./rockitweb";
import baseColours from "./colors";
export default {
  ...rockitWeb,
  hero: {
    heading: {
      color: "primary",
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
  },
};
