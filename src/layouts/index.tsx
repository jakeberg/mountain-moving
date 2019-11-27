import * as React from "react";
import Helmet from "react-helmet";

import "./index.css";

interface DefaultLayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const Layout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Mountain Moving Company"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      appbar
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0
        }}
      >
        {children()}
      </div>
    </div>
  );
};

export default Layout;
