import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Props } from "./interfaces";

export const StyledButton = styled.TouchableOpacity<Props>`
  padding: 20px;
`;

export const StyledOptionTextButton = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${Colors.brandGray};
  text-decoration: underline;
`;
