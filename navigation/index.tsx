import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
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
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import Home from "../screens/Home";
import FundDetails from "../screens/FundDetails";
import Portfolio from "../screens/Portfolio";
import Trade from "../screens/Trade";
import NotFound from "../screens/404";
import Config from "../screens/Config";

import { lightTheme, darkTheme } from "../constants/Colors";
import { currentColorTheme } from "../hooks/useTheme";
import { ThemeProvider } from "styled-components";

const Stack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<any>();
const BottomTab = createBottomTabNavigator<any>();
const HomeStack = createNativeStackNavigator<any>();

export default function Navigation() {
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const theme = currentColorTheme();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <NavigationContainer linking={LinkingConfiguration}>
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
    </ThemeProvider>
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
        component={NotFound}
        options={{
          title: "Ooooops",
          headerStyle: {
            backgroundColor: Colors.brandPrimary,
          },
          headerTintColor: Colors.brandLight,
        }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Config"
          component={Config}
          options={{
            title: "Config",
            headerStyle: {
              backgroundColor: Colors.brandPrimary,
            },
            headerTintColor: Colors.brandLight,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  const theme = currentColorTheme();
  const bottomTabsTheme =
    theme === "light" ? lightTheme.brandBackground : darkTheme.brandBackground;

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        lazy: false,
        tabBarActiveTintColor: Colors.brandPrimary,
        tabBarActiveBackgroundColor: bottomTabsTheme,
        tabBarInactiveBackgroundColor: bottomTabsTheme,
        tabBarStyle: {
          backgroundColor: bottomTabsTheme,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={30} color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="Trade"
        component={Trade}
        options={{
          headerStyle: {
            backgroundColor: Colors.brandPrimary,
          },
          headerTintColor: Colors.brandLight,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="arrow-decision-outline"
              size={30}
              color={color}
            />
          ),
          title: "Trade",
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerStyle: {
            backgroundColor: Colors.brandPrimary,
          },
          headerTintColor: Colors.brandLight,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="store" size={30} color={color} />
          ),
          title: "Portfolio",
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStackScreen = ({ navigation, route }: any) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "";
    if (routeName === "FundDetails")
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    else navigation.setOptions({ tabBarStyle: { display: "flex" } });
  }, [navigation, route]);

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: Colors.brandPrimary,
          },
          headerTintColor: Colors.brandLight,
          headerTitleAlign: "center",
          title: "",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Config")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome name="cog" size={30} color={Colors.brandLight} />
            </Pressable>
          ),
        }}
      />
      <HomeStack.Screen
        name="FundDetails"
        component={FundDetails}
        options={{
          headerStyle: {
            backgroundColor: Colors.brandPrimary,
          },
          headerTintColor: Colors.brandLight,
          headerTitleAlign: "center",
          title: "",
        }}
      />
    </HomeStack.Navigator>
  );
};
