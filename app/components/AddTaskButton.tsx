import { Entypo } from "@expo/vector-icons";
import React from "react";
import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";

const AddTaskButton = ({
  onPress,
}: {
  onPress?: (event: GestureResponderEvent) => void;
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.container_pressed : null,
      ]}
      onPress={(event) => {
        if (onPress != null) onPress(event);
      }}
    >
      <Entypo name="plus" size={24} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2ecc71",
    borderRadius: 8,
    flexDirection: "row",
    padding: 16,
    gap: 10,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  container_pressed: {
    backgroundColor: "#58d68d",
    shadowColor: "green",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
  },
});

export default AddTaskButton;
