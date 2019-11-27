import React from "react";
import Image from "./image";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import Content from "./content";

interface ResourceProps {
  content: any;
}
const Resource = ({ content }: ResourceProps) => {
  return (
    <Container container justify="space-between" direction={"row"}>
      <Grid item md={6} sm={12}>
        <Image />
      </Grid>
      <Grid item md={6} sm={12} container alignItems="center">
        <Content />
      </Grid>
    </Container>
  );
};

const Container = styled(Grid)`
  &:not(:first-of-type) {
    margin: 5.75rem 0;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      margin: 2.2rem 0;
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    &:last-of-type {
      margin-top: initial;
    }
  }
`;

export default Resource;
