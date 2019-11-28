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
    primary: { main: "#536975" },
    secondary: { main: "#8aaec2" },
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
    fontFamily: ["Montserrat", "sans-serif"]
  },
  fontweight: {
    light: 200,
    regular: 400,
    medium: 500,
    heavy: 700
  }
});
