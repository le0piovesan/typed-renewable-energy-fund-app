import React from "react";
import { Props } from "./interfaces";
import { ScrollView } from "react-native";

export default function ScrollForm({ scrollHidden, children }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={scrollHidden ? false : true}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
      }}
      keyboardShouldPersistTaps={"handled"}
    >
      {children}
    </ScrollView>
  );
}
