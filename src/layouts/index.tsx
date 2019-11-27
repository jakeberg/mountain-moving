import * as React from "react";
import Helmet from "react-helmet";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";

import "./index.css";
import { makeStyles } from "@material-ui/styles";

interface DefaultLayoutProps {}

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid black`
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

const Layout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
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
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Mountain Moving Company
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Pricing
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Contact
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
    </div>
  );
};

export default Layout;
