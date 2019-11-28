import React from "react";
import styled from "styled-components";
import { Typography, Button, Grid } from "@material-ui/core";

interface ContentProps {}

const Content = ({}: ContentProps) => {
  return (
    <Container>
      <Heading variant="h4">{"Header content"}</Heading>
      <Body variant="h5">
        {
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, itaque quis delectus ea pariatur voluptas enim odio. Mollitia, harum illo magnam quisquam doloribus ad facere illum consequatur veritatis tenetur, ut fugit sed at dolorem accusamus facilis cupiditate, corrupti quae. Excepturi magni inventore corrupti incidunt saepe aut quas consequuntur nihil exercitationem?"
        }
      </Body>
      <a href={"asdf"} style={{ textDecoration: "none" }}>
        <StyledButton variant="contained" color="secondary">
          Read More
        </StyledButton>
      </a>
    </Container>
  );
};

const Container = styled(Grid)`
  padding: 0 2.8rem 0 0;
`;

const Heading = styled(Typography)`
  font-size: 1.75rem;
  line-height: 2.81rem;
  font-family: Merriweather;
  font-weight: 500;
  color: #000;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const Body = styled(Typography)`
  padding: 2rem 0;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.8125rem;
  color: #4a4a4a;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0.75rem 0 1rem;
    font-size: 0.9375rem;
    line-height: 1.5rem;
  }
`;

const StyledButton = styled(Button)`
  padding: 0.35rem 1.75rem;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
    padding: 0.8rem;
  }
`;

export default Content;
