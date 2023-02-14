import React from "react";
import Container from "../../../components/Container";
import { Title } from "../../../components/Text/Title";
import ButtonText from "../../../components/ButtonText";

export default function Register({ navigation }: any) {
  return (
    <Container>
      <Title>Register</Title>
      <ButtonText
        label={"Or log in"}
        onPress={() => navigation.navigate("Login")}
      />
    </Container>
  );
}
