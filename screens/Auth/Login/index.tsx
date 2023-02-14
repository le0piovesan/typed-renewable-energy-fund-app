import React from "react";
import ButtonText from "../../../components/ButtonText";
import Container from "../../../components/Container";
import { Title } from "../../../components/Text/Title";

export default function Login({ navigation }: any) {
  return (
    <Container>
      <Title>Login</Title>
      <ButtonText
        label={"Or sign up"}
        onPress={() => navigation.navigate("Register")}
      />
    </Container>
  );
}
