import React, { useState } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Props {
  OnCategoryChange?: (index: number) => void;
}

const CategoryButtons = ({ OnCategoryChange }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const updateIndex = (event: GestureResponderEvent, newIndex: number) => {
    setCurrentIndex(newIndex);
    if (OnCategoryChange) OnCategoryChange(newIndex);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={(event) => updateIndex(event, 0)}
        style={[
          currentIndex === 0 ? styles.button_active : styles.button,
          { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
        ]}
      >
        <Text style={currentIndex === 0 ? styles.text_active : styles.text}>
          Daily
        </Text>
      </Pressable>
      <Pressable
        onPress={(event) => updateIndex(event, 1)}
        style={[
          currentIndex === 1 ? styles.button_active : styles.button,
          { borderRadius: 0 },
        ]}
      >
        <Text style={currentIndex === 1 ? styles.text_active : styles.text}>
          Weekly
        </Text>
      </Pressable>
      <Pressable
        onPress={(event) => updateIndex(event, -1)}
        style={[
          currentIndex === -1 ? styles.button_active : styles.button,
          { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
        ]}
      >
        <Text style={currentIndex === -1 ? styles.text_active : styles.text}>
          Overall
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 8,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
  },
  button_active: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#5fa5e1",
    padding: 16,
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    fontWeight: "600",
    color: "grey",
  },
  text_active: {
    textAlign: "center",
    fontWeight: "600",
  },
});

export default CategoryButtons;
