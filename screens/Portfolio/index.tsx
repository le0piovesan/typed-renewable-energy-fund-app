import React from "react";
import Container from "../../components/Container";
import { Subtitle } from "../../components/Text/Subtitle";
import { Title } from "../../components/Text/Title";

export default function Portfolio({ navigation }: any) {
  return (
    <Container>
      <Title>Here you can track your progress</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum
        consectetur nisi ac elementum. Mauris congue elementum ullamcorper.
        Nulla vitae odio et leo blandit ornare eget sodales neque. Praesent
        faucibus sem enim, sed dapibus ligula volutpat et. Aenean elementum
        tempus condimentum. Praesent tristique ante eget erat accumsan, eget
        sollicitudin dolor pharetra. Quisque sed lacus quis urna semper
        fringilla in sed diam. Vestibulum vitae nisi ipsum.
      </Subtitle>
    </Container>
  );
}
