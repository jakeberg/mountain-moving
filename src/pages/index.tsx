import * as React from "react";
import get from "lodash/get";
import Layout from "../layouts";
import Resource from "../components/resource";
import { Container, Paper, Typography } from "@material-ui/core";
import Hero from "../components/hero";
import styled from "styled-components";

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
      <Hero content={{}} />
      <Container>
        <PaperWrapper>
          <Typography variant="h5">
            Mountain Moving Company is an independent moving company with
            friendly employees that pride ourselves on providing quality
            services to each of our clients.
          </Typography>

          <Typography variant="h6">
            With 5 years in the moving industry, our professional team will be
            glad to help with your relocation.{" "}
          </Typography>
        </PaperWrapper>

        <Resource content={{ fileName }} />
        <Resource content={{ fileName }} />
        <PaperWrapper>
          <ul>
            <li>
              <Typography variant="h6">
                "This was perfect for moving on a budget while still wanting to
                protect and properly move all of my things. The movers were very
                knowledgable, efficient, and professional. All of my stuff made
                it safely back, Indiana to Texas -- over a 900 mile drive. No
                damage and no shifting!" -Jake Hamilton{" "}
              </Typography>
            </li>
            <li>
              <Typography variant="h6">
                "This is an excellent company to do business with. They were
                timely and honest! They did a great job moving me from
                Indianapolis to Zionsville. I almost forgot to mention, they
                properly communicate every step of the way." - Andrea Snyder{" "}
              </Typography>
            </li>
          </ul>
        </PaperWrapper>

        <PaperWrapper>
          <ul>
            <li>
              <Typography variant="h6">
                A great choice for small and large moves. South-Central Indiana{" "}
              </Typography>
            </li>
            <li>
              <Typography variant="h6">
                South-Central Indiana based.{" "}
              </Typography>
            </li>
            <li>
              <Typography variant="h6">
                Serving Bloomington, Nashville, Columbus, and Indianapolis -- as
                well as some surrounding areas.{" "}
              </Typography>
            </li>
          </ul>
        </PaperWrapper>
      </Container>
    </Layout>
  );
};

const PaperWrapper = styled(Paper)`
  padding: 20px;
`;

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
