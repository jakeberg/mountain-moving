import * as React from "react";
import get from "lodash/get";
import Layout from "../layouts";
import Resource from "../components/resource";
import { Container } from "@material-ui/core";

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

  const fileName = get(props.data, "fileName.childImageSharp.fluid.src", "");
  return (
    <Layout content={props.data}>
      <Container>
        <p>
          Mountain Moving Company is an independent moving company with friendly
          employees that pride ourselves on providing quality services to each
          of our clients.
        </p>
        <p>
          With 5 years in the moving industry, our professional team will be
          glad to help with your relocation.
        </p>
        <p>
          "This was perfect for moving on a budget while still wanting to
          protect and properly move all of my things. The movers were very
          knowledgable, efficient, and professional. All of my stuff made it
          safely back, Indiana to Texas -- over a 900 mile drive. No damage and
          no shifting!" -Jake Hamilton
        </p>
        <p>
          "This is an excellent company to do business with. They were timely
          and honest! They did a great job moving me from Indianapolis to
          Zionsville. I almost forgot to mention, they properly communicate
          every step of the way." - Andrea Snyder
        </p>

        <ul>
          <li>
            A great choice for small and large moves. South-Central Indiana
          </li>
          <li>South-Central Indiana based.</li>
          <li>
            Serving Bloomington, Nashville, Columbus, and Indianapolis -- as
            well as some surrounding areas.
          </li>
        </ul>
      </Container>
      <Resource content={{ fileName }} />
      <Resource content={{ fileName }} />
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
