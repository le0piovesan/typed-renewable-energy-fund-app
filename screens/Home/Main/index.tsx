import React from "react";
import { View, FlatList } from "react-native";
import SectionRow from "../../../components/Container/SectionRow";
import { Main as MainText } from "../../../components/Text/Main";

import {
  ContainerMain,
  FundCard,
  FundBackground,
  FundGraph,
  DescriptionCard,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../constants/Colors";
import { Secondary } from "../../../components/Text/Secondary";

export default function Main({ funds }: any) {
  const navigation = useNavigation();
  return (
    <ContainerMain>
      <MainText>Trending Funds 📈</MainText>
      <Secondary>Current popular funds that are being seen 👀</Secondary>
      <FlatList
        data={funds}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FundCard
            onPress={() => navigation.navigate("FundDetails", { item })}
          >
            <FundBackground
              colors={[Colors.brandPrimary, "transparent", "transparent"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <FundGraph source={item.graph} resizeMode="contain" />
              <DescriptionCard>
                <SectionRow>
                  <MaterialIcons
                    name="attach-money"
                    size={30}
                    color={Colors.brandSecondary}
                  />
                  <View>
                    <MainText>{item.name}</MainText>
                    <Secondary>{item.value}</Secondary>
                  </View>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={14}
                    color="black"
                    style={{
                      marginLeft: 5,
                    }}
                  />
                </SectionRow>
              </DescriptionCard>
            </FundBackground>
          </FundCard>
        )}
        horizontal={true}
      />
    </ContainerMain>
  );
}
