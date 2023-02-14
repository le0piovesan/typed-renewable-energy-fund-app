import React from "react";
import { Props } from "./interfaces";
import { StyleText } from "./styles";

export function Main({ children, ...props }: Props) {
  return <StyleText {...props}> {children} </StyleText>;
}
