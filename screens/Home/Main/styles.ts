import styled from "styled-components";
import Colors from "../../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export const ContainerMain = styled.View`
  flex: 1.5;
  justify-content: center;
  padding: 5px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.borderColor};
`;

export const FundCard = styled.TouchableOpacity`
  margin: 10px 5px;
  border-width: 1px;
  border-color: ${(props) => props.theme.borderColor};
  border-radius: 20px;
`;

export const FundBackground = styled(LinearGradient)`
  border-color: ${(props) => props.theme.borderColor};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 100%;
`;

export const FundGraph = styled.Image`
  width: 125px;
  height: 150px;
`;

export const DescriptionCard = styled.View`
  padding: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.borderColor};
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;
