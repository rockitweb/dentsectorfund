// See other presets to try at https://theme-ui.com/packages/presets
import rockitWeb from "./rockitweb";
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
};
