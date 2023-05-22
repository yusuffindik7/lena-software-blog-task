import * as React from "react";
import { ColorSchemeName } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import LinkingConfiguration from "./LinkingConfiguration";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "./types";

import { SimpleLineIcons } from "@expo/vector-icons";

import { HomeScreen, DetailScreen } from "../screens/index";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "rgba(0, 30, 180, 0.8)",
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"home">) => ({
          title: "Ana Sayfa",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" color={color} size={25} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
