import React from "react";
import { Text, View, FlatList, TouchableOpacity, Linking } from "react-native";
import SectionRow from "../../../components/Container/SectionRow";
import { ContainerFooter, BlogCard } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Main } from "../../../components/Text/Main";
import { Secondary } from "../../../components/Text/Secondary";

import Colors from "../../../constants/Colors";

export default function Footer({ blog }: any) {
  return (
    <ContainerFooter>
      <Main>Our Blog 📝</Main>
      <Secondary>Take a look at our latest posts:</Secondary>
      <FlatList
        data={blog}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Linking.openURL(item.linkTo)}>
            <BlogCard colors={[Colors.brandSecondary, "transparent"]}>
              <SectionRow spaced>
                <View>
                  <Main>{item.title}</Main>
                  <Secondary>{item.description}</Secondary>
                </View>
                <MaterialIcons name="read-more" size={35} color="#fff" />
              </SectionRow>
            </BlogCard>
          </TouchableOpacity>
        )}
      />
    </ContainerFooter>
  );
}
