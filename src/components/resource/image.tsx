import React from "react";
import styled from "styled-components";

interface ImageProps {
  filename: string;
}

const Image = ({ fileName }: ImageProps) => {
  return <StyledImage src={require(`../../images/${fileName}`)} />;
};

const StyledImage = styled.img`
  width: 100%;
`;

export default Image;
