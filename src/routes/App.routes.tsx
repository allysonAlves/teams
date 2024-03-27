import { View, Text } from "react-native";
import React from "react";
import Groups from "../screens/Groups";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";
import NewGroup from "../screens/NewGroup";
import GroupDetails from "../screens/GroupDetails";

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  const theme = useTheme();
  const newTheme = DefaultTheme;
  newTheme.colors.background = theme.COLORS.GRAY_600;

  return (
    <NavigationContainer theme={newTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Groups" component={Groups} />
        <Stack.Screen name="NewGroup" component={NewGroup} />
        <Stack.Screen name="GroupDetails" component={GroupDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
