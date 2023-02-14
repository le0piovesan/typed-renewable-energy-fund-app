import React from "react";
import { Text } from "react-native";
import Colors from "../../constants/Colors";
import { Props } from "./interfaces";
import { StyledButton, StyledOptionTextButton } from "./styles";

export default function ButtonText({ label, ...props }: Props) {
  return (
    <StyledButton {...props}>
      <StyledOptionTextButton>
        {label}{" "}
        <Text style={{ fontWeight: "bold", color: Colors.brandSecondary }}>
          here
        </Text>
      </StyledOptionTextButton>
    </StyledButton>
  );
}
