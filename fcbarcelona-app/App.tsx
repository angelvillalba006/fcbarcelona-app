import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./src/pages/HomePage";
import NavigationPage from "./src/pages/NavigationPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <Stack.Navigator
            initialRouteName="Navigation"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Navigation" component={NavigationPage} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
