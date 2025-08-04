import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  username: string;
  streak: number;
  achievements: string[];
  isUser?: boolean;
}

const LeaderboardItem = ({ username, streak, achievements, isUser }: Props) => {
  return (
    <View style={[styles.container, isUser ? styles.container_user : null]}>
      <Image
        style={{
          width: 48,
          height: 48,
        }}
        source={{
          uri: "https://static.vecteezy.com/system/resources/previews/013/209/469/non_2x/simple-flat-design-character-free-vector.jpg",
        }}
      />
      <Text>{username}</Text>
      <View style={{ flex: 1 }}>
        <Text></Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{streak}</Text>
      <FontAwesome6 color="orange" name="fire" size="32" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    gap: 8,
    alignItems: "center",
  },
  container_user: {
    backgroundColor: "#85F291",
  },
});

export default LeaderboardItem;
