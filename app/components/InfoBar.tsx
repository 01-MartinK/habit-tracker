import { FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const InfoBar = () => {
  const [currentView, setCurrentView] = useState<number>(0);

  return (
    <Pressable style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 50,
            borderWidth: 4,
            borderColor: "green",
          }}
        />
        <Text>Level 1</Text>
      </View>
      <View style={{ flex: 1 }} />
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <FontAwesome6 color="orange" name="fire" size="32" />
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>1</Text>
      </View>
    </Pressable>
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

export default InfoBar;
