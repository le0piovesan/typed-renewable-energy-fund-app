import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable } from "react-native";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { useAppSelector } from "../hooks/useRedux";

import Colors from "../constants/Colors";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

// Pages
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import Home from "../screens/Home";
import FundDetails from "../screens/FundDetails";
import Portfolio from "../screens/Portfolio";
import Trade from "../screens/Trade";

const AuthStack = createNativeStackNavigator<any>();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  // const theme = useAppSelector((state) => state.theme.theme);
  const currentUser = useAppSelector((state) => state.auth.currentUser);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      // theme={theme === "dark" ? DarkTheme : DefaultTheme}
    >
      {currentUser ? (
        <RootNavigator />
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Login"
            component={Login}
            options={{
              title: "Login",
              headerStyle: {
                backgroundColor: Colors.brandPrimary,
              },
              headerTintColor: Colors.brandLight,
            }}
          />
          <AuthStack.Screen
            name="Register"
            component={Register}
            options={{
              title: "Register",
              headerStyle: {
                backgroundColor: Colors.brandPrimary,
              },
              headerBackButtonMenuEnabled: false,
              headerBackVisible: false,
              headerTintColor: Colors.brandLight,
            }}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors.brandPrimary,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors.brandPrimary}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
