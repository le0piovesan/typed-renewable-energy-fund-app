import styled from "styled-components";
import Colors from "../../constants/Colors";

export const FundContainer = styled.View`
  background-color: ${Colors.brandLight};
  border-radius: 100px;
`;

export const FundIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Grid = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.borderColor};
`;

export const Graph = styled.Image`
  flex: 1;
`;

export const Description = styled.View`
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-left-width: 1px;
  border-left-color: ${Colors.borderColor};
`;

export const MoreInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  margin: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.borderColor};
`;

export const PlotBackground = styled.ImageBackground`
  flex: 2;
  width: 100%;
`;
