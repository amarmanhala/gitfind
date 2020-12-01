export default {
  useCustomProperties: false,
  useLocalStorage: false,
  colors: {
    text: "#000",
    background: "#fafafa",
    primary: "#000",
    secondary: "#fff",
    border: "#dbdbdb",
    modes: {
      dark: {
        text: "#B2B2B2",
        background: "#000000",
        primary: "#f5f5f7",
        secondary: "#141414",
        border: "#252525",
      },
      light: {
        text: "#000",
        background: "#fafafa",
        primary: "#0cf",
        secondary: "#fff",
        border: "#9C9C9C",
      },
    },
  },
  fonts: {
    body: "Inter",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: "[ 4, 5, 6 ]",
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 6,
    },

    a: {
      color: "primary",
    },
    input: {
      backgroundColor: "RED",
    },
  },
  buttons: {
    primary: {
      color: "#fff",
      bg: "#005e7f",
      fontSize: "17px",
      cursor: "pointer",
      fontFamily: "body",
      transition: "all 350ms ease-in-out",
      boxSizing: "none !important",
      borderRadius: "22px",

      "&:hover": {
        bg: "primary",
        color: "background",
      },
      "&:focus": {
        outline: "none",
      },
    },
    secondary: {
      color: "text",
      bg: "transparent",
      fontSize: "0.9rem",
      cursor: "pointer",
      fontFamily: "body",
      transition: "all 350ms ease-in-out",
      "&:hover": {
        bg: "primary",
        color: "background",
      },
      "&:focus": {
        outline: "none",
      },
    },
  },
}
