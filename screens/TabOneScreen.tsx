import { View } from "react-native";

import { RootTabScreenProps } from "../types";
import { Title } from "../components/texts/Title";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View>
      <Title>Tab One</Title>
      <View />
    </View>
  );
}
