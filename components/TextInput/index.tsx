import React from "react";
import { Props } from "./interfaces";
import {
  ContainerInput,
  ContainerLabel,
  StyledText,
  StyledPasswordButton,
  StyledInput,
} from "./styles";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function TextInput({
  label,
  passwordVisible = false,
  setPasswordVisible,
  ...props
}: Props) {
  return (
    <ContainerInput>
      <ContainerLabel>
        <StyledText light size="14px">
          {label}
        </StyledText>
      </ContainerLabel>
      {label === "Password" && (
        <StyledPasswordButton
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          {passwordVisible ? (
            <Entypo name="eye" size={30} color={Colors.brandSecondary} />
          ) : (
            <Entypo
              name="eye-with-line"
              size={30}
              color={Colors.brandSecondary}
            />
          )}
        </StyledPasswordButton>
      )}

      <StyledInput {...props} />
    </ContainerInput>
  );
}
