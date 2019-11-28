import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import styled from "styled-components";

interface HeroProps {
  content: any;
}

const Hero = ({ content }: HeroProps) => {
  return (
    <Container container direction={"column"}>
      <PaperWrapper>
        <Typography variant="h3">Professional Movers, on a Budget!</Typography>
        <Typography variant="body1">
          Mountain Moving Company is an independent moving company with friendly
          employees that pride ourselves on providing quality services to each
          of our clients.
        </Typography>
      </PaperWrapper>
    </Container>
  );
};

const Container = styled(Grid)``;

const PaperWrapper = styled(Paper)`
  padding: 20px;
`;

export default Hero;
