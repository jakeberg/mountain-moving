import React from "react";

import { Grid } from "@material-ui/core";
import styled from "styled-components";

interface HeroProps {
  content: any;
}

const Hero = ({ content }: HeroProps) => {
  return (
    <Container container justify="space-between" direction={"row"}>
      <h1>Hero</h1>
    </Container>
  );
};

const Container = styled(Grid)`
  padding: "10px";
`;

export default Hero;
