import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import { Props } from "./interfaces";

export const StyleText = styled.Text<Props>`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: ${({ color, theme }: any) => (color ? color : theme.brandText)};
`;
