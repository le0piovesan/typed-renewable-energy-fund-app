import React from "react";
import { Props } from "./interfaces";
import { StyledContainer } from "./styles";

export default function SectionRow({ children, ...props }: Props) {
  return <StyledContainer {...props}>{children}</StyledContainer>;
}
