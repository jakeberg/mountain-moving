import * as React from "react";
import Helmet from "react-helmet";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import styled from "styled-components";
import get from "lodash/get";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import theme from "../theme";

import "./index.css";
import { makeStyles } from "@material-ui/styles";

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
    justifyContent: "center"
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
    <SCThemeProvider theme={theme}>
      <>
        <Helmet
          title="Mountain Moving Company"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
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
      </>
    </SCThemeProvider>
  );
};

const CommonButton = styled(Button)`
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(143, 180, 201, 0.3);
  height: 48px;
  padding: 0 30px;
  text-decoration: none;
  background-color: #536975;
`;

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
