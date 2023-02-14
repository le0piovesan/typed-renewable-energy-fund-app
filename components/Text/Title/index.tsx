import React from "react";
import { Props } from "./interfaces";
import { StyleText } from "./styles";
import { currentColorTheme } from "../../../hooks/useTheme";

export function Title({ children, ...props }: Props) {
  return (
    <StyleText {...props} currentColorTheme={currentColorTheme}>
      {children}
    </StyleText>
  );
}
