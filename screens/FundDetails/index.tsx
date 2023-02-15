import React, { useEffect } from "react";
import Container from "../../components/Container";
import { Title } from "../../components/Text/Title";
import SectionRow from "../../components/Container/SectionRow";
import PressableBtn from "../../components/PressableBtn";
import {
  FundContainer,
  FundIcon,
  Grid,
  Graph,
  Description,
  MoreInfo,
  PlotBackground,
} from "./styles";
import { Secondary } from "../../components/Text/Secondary";
import { Main } from "../../components/Text/Main";

export default function FundDetails({ navigation, route }: any) {
  const { params } = route,
    { item = "" } = params;

  useEffect(() => {
    navigation.setOptions({
      title: item.name,
      headerStyle: {
        backgroundColor: item.color,
      },
      headerRight: () => (
        <FundContainer>
          <FundIcon source={item.icon} resizeMode="contain" />
        </FundContainer>
      ),
    });
  }, []);

  return (
    <Container>
      <Grid>
        <Graph source={item.graph} resizeMode="contain" />
        <Description>
          <Title>Info & Stats</Title>
          <Secondary>
            Value: <Main>${item.value}</Main>
          </Secondary>
          <Secondary>
            AUM: <Main>$430.88m</Main>
          </Secondary>
          <Secondary>
            Vintage Range: <Main>2019 - 2022</Main>
          </Secondary>
          <Secondary>
            Price at Close: <Main>$417.68</Main>
          </Secondary>
        </Description>
      </Grid>

      <MoreInfo>
        <Secondary>
          Issue Date:{"\n"}
          <Main>18/04/2022</Main>
        </Secondary>

        <Secondary>
          TER: {"\n"}
          <Main> 0.15 %</Main>
        </Secondary>

        <Secondary>
          Price at Open:{"\n"}
          <Main>$ 17.74</Main>
        </Secondary>
      </MoreInfo>

      <PlotBackground source={item.plotBackground} resizeMode="contain">
        <Secondary>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          condimentum viverra blandit. Nullam id fringilla nisl. Nullam cursus
          ornare purus, finibus posuere elit fringilla a. In hac habitasse
          platea dictumst. Sed non sodales tellus, id malesuada purus. Phasellus
          sed malesuada mauris. Nam sagittis pellentesque dui et blandit. Nulla
          aliquet congue venenatis. Suspendisse cursus sodales dolor sed varius.
          Fusce lobortis, velit id malesuada pretium, ante dui pulvinar augue,
          ut aliquam neque libero nec dui. Suspendisse potenti.
        </Secondary>
      </PlotBackground>
      <SectionRow>
        <PressableBtn label={"Sell"} secondary row onPress={() => {}} />
        <PressableBtn label={"Buy"} row onPress={() => {}} />
      </SectionRow>
    </Container>
  );
}
