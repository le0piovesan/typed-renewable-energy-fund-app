import React from "react";
import { View } from "react-native";
import SectionRow from "../../../components/Container/SectionRow";
import { ContainerHeader } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { Title } from "../../../components/Text/Title";
import { Subtitle } from "../../../components/Text/Subtitle";

export default function Header({ user }: any) {
  return (
    <ContainerHeader>
      <SectionRow spaced>
        <Ionicons
          name="person-circle-outline"
          size={35}
          color={Colors.brandSecondary}
        />
        <SectionRow>
          <Title>Wallet: </Title>
          <Title color={Colors.brandValue}>${user.account}</Title>
        </SectionRow>

        <View>
          <Subtitle>Profit:</Subtitle>
          <SectionRow>
            <Ionicons
              name="arrow-up-circle"
              size={20}
              color={Colors.brandValue}
            />
            <Title>0%</Title>
          </SectionRow>
        </View>
      </SectionRow>
    </ContainerHeader>
  );
}
