import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import { Props } from "../Title/interfaces";

export const StyleText = styled.Text<Props>`
  font-size: 14px;
  text-align: ${({ center }: boolean) => (center ? "center" : "left")};
  color: ${({ color }: string) => (color ? color : Colors.brandDark)};
`;
