import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation() as any;
  const handleDeleteOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("viewedOnboarding");
      console.log("viewedOnboarding key deleted successfully");
      navigation.navigate("Onboarding");
    } catch (error) {
      console.log("Error deleting viewedOnboarding key:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
      <Button title="Delete Onboarding" onPress={handleDeleteOnboarding} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
});

export default HomePage;
