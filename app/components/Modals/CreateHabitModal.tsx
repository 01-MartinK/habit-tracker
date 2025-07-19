import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const CreateHabitModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose?: () => void;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={() => {
        if (onClose) onClose();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create a new habit</Text>
        <Text>Simple modal test</Text>
        <Pressable style={{ marginVertical: 16 }}>
          <View style={styles.iconSelectionArea}>
            <Entypo name="plus" size={24} color="gray" />
          </View>
        </Pressable>
        <View style={styles.textFieldContainer}>
          <Text>Habit Title</Text>
          <TextInput placeholder="Enter habit title" keyboardType="default" />
        </View>
        <View style={styles.textFieldContainer}>
          <Text>Habit Explanation</Text>
          <TextInput placeholder="Enter title" keyboardType="default" />
        </View>
        <View style={styles.textFieldContainer}>
          <Text>Start time</Text>
          <TextInput placeholder="06:00" keyboardType="default" />
        </View>
        <View style={styles.textFieldContainer}>
          <Text>Amount of time it takes</Text>
          <TextInput placeholder="60 min" keyboardType="numeric" />
        </View>
        <View style={{ flex: 1 }} />
        <View style={{ gap: 16 }}>
          <Pressable
            onPress={() => {
              if (onClose) onClose();
            }}
            style={({ pressed }) => [
              pressed ? styles.button_active : styles.button,
              { backgroundColor: "#2ecc71" },
            ]}
          >
            <Text style={{ textAlign: "center" }}>Create</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              if (onClose) onClose();
            }}
            style={({ pressed }) => [
              pressed ? styles.button_active : styles.button,
              { backgroundColor: "#e74c3c" },
            ]}
          >
            <Text style={{ textAlign: "center" }}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 32,
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
  iconSelectionArea: {
    width: 128,
    height: 128,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textFieldContainer: {
    margin: 4,
    padding: 4,
    width: 320,
  },
  button: {
    width: 320,
    padding: 16,
    backgroundColor: "#2ecc71",
    borderRadius: 8,
  },
  button_active: {
    width: 320,
    padding: 16,
    backgroundColor: "#2ecc71",
    borderRadius: 8,
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
  },
});

export default CreateHabitModal;
