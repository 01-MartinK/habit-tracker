import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface TaskButtonProps {
  title: string;
  time: number;
  startTime: string;
  color: string;
  iconName: string;
}

const TaskButton = ({
  title,
  time,
  startTime,
  color,
  iconName,
}: TaskButtonProps) => {
  return (
    <Pressable style={[styles.container, { backgroundColor: color }]}>
      <View>
        <FontAwesome6 color="white" size={24} name={iconName} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{title}</Text>
        <Text style={{ fontSize: 12 }}>Starts {startTime}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Text>|</Text>
        <FontAwesome6 color="gray" size={24} name="clock" />
        <Text style={{ fontSize: 16 }}>{time} min</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flexDirection: "row",
    padding: 16,
    gap: 10,
    height: 64,
    alignItems: "center",
  },
});

export default TaskButton;
