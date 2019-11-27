import * as React from "react";
import Link from "gatsby-link";
import Layout from "../layouts";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    fileName: {
      childImageSharp: {
        fluid: {
          src: string;
        };
      };
    };
  };
}

const Homepage: React.FC<IndexPageProps> = props => {
  console.log("Homepage", props.data);
  return (
    <Layout content={props.data}>
      <p>
        <strong>{props.data.site.siteMetadata.title}</strong> site.
      </p>
      asdf
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    fileName: file(relativePath: { eq: "images/icon.png" }) {
      childImageSharp {
        fluid(maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Homepage;
