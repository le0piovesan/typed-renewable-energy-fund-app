import React, { useState } from "react";
import { RootTabScreenProps } from "../types";

import { StyledContainer } from "../components/Container/styles";
import { Title } from "../components/Text/Title";
import { Subtitle } from "../components/Text/Subtitle";
import { Main } from "../components/Text/Main";
import { Secondary } from "../components/Text/Secondary";
import PressableBtn from "../components/PressableBtn";
import ScrollForm from "../components/ScrollForm";
import TextInput from "../components/TextInput";
import ContainerForm from "../components/Container/ContainerForm";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <StyledContainer>
      <ScrollForm scrollHidden>
        <Title>Text title</Title>
        <Subtitle>Text sub</Subtitle>
        <Main>Text main</Main>
        <Secondary>Text second</Secondary>
        <ContainerForm>
          <TextInput
            label={"Password"}
            secureTextEntry={passwordVisible ? false : true}
            passwordVisible={passwordVisible}
            setPasswordVisible={setPasswordVisible}
          />
          <PressableBtn
            label={"teste"}
            onPress={() => console.log("testing")}
          />
          <PressableBtn
            label={"teste"}
            onPress={() => console.log("testing2")}
            secondary
            disabled
          />
        </ContainerForm>
      </ScrollForm>
    </StyledContainer>
  );
}
