import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import { Props } from "./interfaces";

export const StyleText = styled.Text<Props>`
  padding-left: 5px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  font-family: "space-mono";
  color: ${({ color }: string) => (color ? color : Colors.brandDark)};
`;
