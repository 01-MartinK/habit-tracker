import FontAwesome6 from "@expo/vector-icons/build/FontAwesome6";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StreakBar = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <FontAwesome6 color="orange" name="fire" size="32" />
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Current streak: 5
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default StreakBar;
