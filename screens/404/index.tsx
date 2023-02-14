import { TouchableOpacity, Text, View } from "react-native";

import { RootStackScreenProps } from "../../types";

export default function NotFound({
  navigation,
}: RootStackScreenProps<"NotFound">) {
  return (
    <View>
      <Text>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace("Root")}>
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}