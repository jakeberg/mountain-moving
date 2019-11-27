const createMuiTheme = require("@material-ui/core/styles/createMuiTheme")
  .default;

const ThemeBreakpoints = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 780,
      lg: 960,
      xl: 1100
    }
  },
  maxWidths: {
    sm: "1140px",
    md: "1300px"
  }
});

const { breakpoints } = ThemeBreakpoints;

module.exports = createMuiTheme({
  ...ThemeBreakpoints,
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#168, 168, 168"
      }
    },
    MuiButton: {
      containedPrimary: {
        background: "#536975",
        "&:hover": {
          background: "#536975"
        },
        [breakpoints.down("xs")]: {}
      },
      containedSecondary: {
        "&:hover": {}
      },

      root: {
        "&:hover": {
          textDecoration: "none"
        },
        "&:error": {}
      }
    }
  },
  palette: {
    primary: { main: "#000000" },
    secondary: { main: "#000000" },
    grey: { 500: "#000000" },
    text: {
      primary: "#000000",
      secondary: "#000000"
    }
  },
  shape: {
    borderRadius: 4
  },
  typography: {
    fontFamily: "Montserrat', sans-serif;",
    useNextVariants: true,
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {}
  },
  fontweight: {
    light: 200,
    regular: 400,
    medium: 500,
    heavy: 700
  }
});
