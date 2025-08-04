import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LevelBar = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 32,
          height: 32,
          borderRadius: 50,
          borderWidth: 4,
          borderColor: "green",
        }}
      />
      <View>
        <Text>Level 1</Text>
        <Text style={{ fontSize: 12, color: "gray" }}>
          500exp to next level
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
    gap: 8,
  },
});

export default LevelBar;
