import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomePage from "./src/pages/HomePage";
import NavigationPage from "./src/pages/NavigationPage";
import ExamplePage from "./src/pages/Example";
import Onboarding from "./src/pages/Onboarding";
import { ActivityIndicator } from "react-native-paper";

const Stack = createStackNavigator();

// Loading component
const Loading = () => {
  // Display an activity indicator while loading
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

/**
 * Root component of the FC Barcelona app.
 * Renders the navigation stack and sets up the app's layout.
 *
 * @returns The rendered app component.
 */
export default function App() {
  // State variables
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  const [initialRoute, setInitialRoute] = useState("Onboarding");

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("viewedOnboarding");
      if (value !== null) {
        setViewedOnboarding(true);
        setInitialRoute("Navigation");
      }
    } catch (error) {
      console.error("Error @checkOnboarding: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <StatusBar style="auto" />
          {loading ? (
            <Loading />
          ) : (
            <Stack.Navigator
              initialRouteName={initialRoute}
              screenOptions={{ headerShown: false }}
            >
              {/* Screens */}
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Navigation" component={NavigationPage} />
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="Example" component={ExamplePage} />
            </Stack.Navigator>
          )}
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
