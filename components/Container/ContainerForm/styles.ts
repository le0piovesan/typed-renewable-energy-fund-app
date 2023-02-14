import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import { Props } from "./interfaces";

export const StyledContainer = styled.View<Props>`
  background-color: #fff;
  border-width: 2px;
  border-color: ${Colors.borderColor};
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
`;
