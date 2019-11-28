import React from "react";
import styled from "styled-components";

interface ImageProps {
  fileName: string;
}

const Image = ({ fileName }: ImageProps) => {
  return <StyledImage src={fileName} />;
};

const StyledImage = styled.img`
  width: 100%;
`;

export default Image;
