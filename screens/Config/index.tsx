import { StatusBar } from "expo-status-bar";
import { Platform, Alert } from "react-native";
import Container from "../../components/Container";
import { Title } from "../../components/Text/Title";
import ButtonText from "../../components/ButtonText";
import { useAppDispatch } from "../../hooks/useRedux";
import { Auth } from "../../redux/auth";

export default function Config() {
  const dispach = useAppDispatch();

  const handleLogOut = () => {
    Alert.alert(
      "ReNew Funds",
      "Do you really want to leave?",
      [
        {
          text: "Yes",
          onPress: async () => {
            try {
              await dispach(Auth.logOut(false));
            } catch (error) {
              console.log(error);
            }
          },
        },
        {
          text: "Cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Container>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <Title>Looking for a way out?</Title>
      <ButtonText label="Log out" onPress={() => handleLogOut()} />
    </Container>
  );
}
