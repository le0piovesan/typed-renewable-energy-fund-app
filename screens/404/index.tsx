import Container from "../../components/Container";
import ButtonText from "../../components/ButtonText";
import { Title } from "../../components/Text/Title";

import { RootStackScreenProps } from "../../types";

export default function NotFound({
  navigation,
}: RootStackScreenProps<"NotFound">) {
  return (
    <Container>
      <Title>This screen doesn't exist.</Title>
      <ButtonText
        label="Find home through"
        onPress={() => navigation.replace("Root")}
      />
    </Container>
  );
}
