import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Props } from "./interfaces";

export const ContainerInput = styled.View`
  height: 50px;
  margin-top: 20px;
`;

export const ContainerLabel = styled.View`
  position: absolute;
  top: -10px;
  left: 15px;
  z-index: 50;
  background-color: #fff;
`;

export const StyledInput = styled.TextInput<Props>`
  flex: 1;
  border-width: 1px;
  border-color: ${({ error }: any) =>
    error ? Colors.brandDanger : Colors.brandGray};
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledText = styled.Text`
  margin-left: 5px;
  margin-right: 5px;
`;

export const StyledPasswordButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 100;
`;
