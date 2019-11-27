import * as React from "react";
import Link from "gatsby-link";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const Homepage: React.FC<IndexPageProps> = props => {
  console.log(props);
  return (
    <div>
      <p>
        <strong>{props.data.site.siteMetadata.title}</strong> site.
      </p>
      asdf
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Homepage;
