import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const StreakDisplayBox = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, textAlign: "center" }}>Monthly Status</Text>
      <Calendar
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    paddingHorizontal: 4,
    borderRadius: 8,
    gap: 8,
  },
});
export default StreakDisplayBox;
