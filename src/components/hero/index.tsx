import React from "react";

import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

interface HeroProps {
  content: any;
}

const Hero = ({ content }: HeroProps) => {
  return (
    <Container container justify="space-between" direction={"row"}>
      <Typography variant="h1">Hero</Typography>
    </Container>
  );
};

const Container = styled(Grid)`
  padding: "10px";
`;

export default Hero;
