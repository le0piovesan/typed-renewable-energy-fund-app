import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import { Props } from "./interfaces";

export const StyleText = styled.Text<Props>`
  padding-left: 10px;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  font-family: "space-mono";
  color: ${({ currentColorTheme }: any) =>
    currentColorTheme == "dark" ? Colors.brandLight : Colors.brandDark};
`;
