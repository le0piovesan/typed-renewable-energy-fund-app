import { StatusBar } from "expo-status-bar";
import { Platform, Alert } from "react-native";
import Container from "../../components/Container";
import { Title } from "../../components/Text/Title";
import ButtonText from "../../components/ButtonText";
import PressableBtn from "../../components/PressableBtn";
import SectionRow from "../../components/Container/SectionRow";
import { currentColorTheme } from "../../hooks/useTheme";
import { useAppDispatch } from "../../hooks/useRedux";
import { Theme } from "../../redux/theme";
import { Auth } from "../../redux/auth";

export default function Config() {
  const dispach = useAppDispatch();
  const theme = currentColorTheme();

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

      <Title>Theme Settings</Title>
      <SectionRow>
        <PressableBtn
          label={"Light Mode ☀️"}
          secondary={theme === "dark"}
          disabled={theme === "light"}
          row
          onPress={() => dispach(Theme.switchTheme("light"))}
        />
        <PressableBtn
          label={"Dark Mode 🌙"}
          secondary={theme === "light"}
          disabled={theme === "dark"}
          row
          onPress={() => dispach(Theme.switchTheme("dark"))}
        />
      </SectionRow>

      <Title>{"\n"}Looking for a way out?</Title>
      <ButtonText label="Log out" onPress={() => handleLogOut()} />
    </Container>
  );
}
