import * as React from "react";
import Helmet from "react-helmet";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styled from "styled-components";
import get from "lodash/get";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

import { makeStyles } from "@material-ui/styles";
import { CommonButton } from "../components/common-button";

interface DefaultLayoutProps {
  content: {
    fileName: {
      childImageSharp: {
        fluid: {
          src: string;
        };
      };
    };
  };
}

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: `0px 0px 5px 6px #ccc;`,
    borderBottom: "1px ",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px"
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: "5px"
  }
}));

const Layout: React.FC<DefaultLayoutProps> = ({ children, content }) => {
  const classes = useStyles();
  const fileName = get(content, "fileName.childImageSharp.fluid.src", "");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SCThemeProvider theme={theme}>
        <Helmet
          title="Mountain Moving Company"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
          ></link>
        </Helmet>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Icon src={fileName} />
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Mountain Moving Company
            </Typography>
            <nav>
              <Link href="#">
                <CommonButton variant="contained" color="primary">
                  Pricing
                </CommonButton>
              </Link>
              <Link href="#">
                <CommonButton variant="contained" color="primary">
                  Contact
                </CommonButton>
              </Link>
            </nav>
          </Toolbar>
        </AppBar>
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0
          }}
        >
          {children}
        </div>
      </SCThemeProvider>
    </ThemeProvider>
  );
};

const Link = styled.a`
  text-decoration: none;
  margin: 0 5px;
`;

export const Icon = styled.div<{ src: string }>`
  width: 100px;
  height: 75px;
  background-size: 100%;
  ${({ src }: any) => `background-image: url(${src})`};
  background-repeat: no-repeat;
  margin-right: 10px;
`;

export default Layout;
