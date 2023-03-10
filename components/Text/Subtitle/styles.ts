import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import { Props } from "../Title/interfaces";

export const StyleText = styled.Text<Props>`
  font-size: 16px;
  text-align: center;
  color: ${Colors.brandGray};
`;
