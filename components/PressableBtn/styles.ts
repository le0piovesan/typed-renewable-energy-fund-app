import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Props } from "./interfaces";

export const StyledButton = styled.TouchableOpacity<Props>`
  background-color: ${({ secondary }: boolean) =>
    secondary ? "transparent" : Colors.brandPrimary};
  border-width: 2px;
  padding: 20px;
  border-color: ${Colors.brandPrimary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  opacity: ${({ disabled }: boolean) => (disabled ? 0.5 : 1)};
  margin: 10px 5px;
  width: ${({ row }: boolean) => (row ? "50%" : "auto")};
`;

export const StyledTextButton = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${({ secondary }: boolean) =>
    secondary ? Colors.brandPrimary : Colors.brandLight};
  font-weight: bold;
`;
