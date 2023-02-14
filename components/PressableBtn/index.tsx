import React from "react";
import { Props } from "./interfaces";
import { StyledButton, StyledTextButton } from "./styles";

export default function PressableBtn({ label, ...props }: Props) {
  return (
    <StyledButton {...props}>
      <StyledTextButton {...props}>{label}</StyledTextButton>
    </StyledButton>
  );
}
