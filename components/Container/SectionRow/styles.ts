import styled from "styled-components/native";
import { Props } from "./interfaces";

export const StyledContainer = styled.View<Props>`
  flex-direction: row;
  justify-content: ${({ spaced }: boolean) =>
    spaced ? "space-between" : "center"};
  align-items: center;
  padding: 0 5px;
`;
