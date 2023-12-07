import styled from "styled-components";
import Colors from "../../../constants/Colors";

export const ContainerFooter = styled.View`
  flex: 1.5;
  justify-content: center;
  padding: 10px 0px 0px;
`;

export const BlogCard = styled.View`
  padding: 10px;
  margin: 5px 0px;
  border-width: 1px;
  border-color: ${(props) => props.theme.borderColor};
  border-radius: 5px;
`;
