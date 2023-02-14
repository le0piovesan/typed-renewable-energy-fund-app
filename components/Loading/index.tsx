import React from "react";
import Container from "../Container";
import { Title } from "../Text/Title";
import { Subtitle } from "../Text/Subtitle";
import { ImageLoading } from "./styles";

import { Props } from "./interfaces";

export default function Loading({ children }: Props) {
  return (
    <Container>
      <ImageLoading
        source={require("../../assets/images/loading-logo.gif")}
        resizeMode="contain"
      />
      <Title>Success!</Title>
      <Subtitle>{children}</Subtitle>
    </Container>
  );
}
