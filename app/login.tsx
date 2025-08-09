import { FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.background}
        colors={["#cbd9e1", "transparent"]}
      />
      <View style={styles.header}>
        <Text>Logo</Text>
      </View>
      <Text style={{ fontSize: 32 }}>Login</Text>
      <View style={styles.textFieldContainer}>
        <Text style={styles.textInputHelper}>Email</Text>
        <View style={styles.textInput}>
          <FontAwesome6 name="envelope" />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Email"
            keyboardType="default"
          />
        </View>
      </View>
      <View style={styles.textFieldContainer}>
        <Text style={styles.textInputHelper}>Password</Text>
        <View style={styles.textInput}>
          <FontAwesome6 name="lock" />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Email"
            keyboardType="default"
            textContentType="password"
            caretHidden={true}
            secureTextEntry
          />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: "row", gap: 4, marginTop: 8 }}>
        <Text>Don't have an account?</Text>
        <Pressable>
          <Text style={{ fontWeight: "bold" }}>Sign up</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: "row", gap: 16, marginTop: 32 }}>
        <View style={styles.icon}>
          <Pressable>
            <FontAwesome6 size={32} name="google" />
          </Pressable>
        </View>
        <View style={styles.icon}>
          <Pressable>
            <FontAwesome6 size={32} name="apple" />
          </Pressable>
        </View>
        <View style={styles.icon}>
          <Pressable>
            <FontAwesome6 size={32} name="facebook" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
  header: { padding: 64, margin: 64 },
  container: {
    padding: 16,
    alignItems: "center",
  },
  textFieldContainer: { width: 280, padding: 8 },
  textInputHelper: {
    fontWeight: "500",
    fontSize: 16,
    padding: 8,
  },
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    minHeight: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "gainsboro",
  },
  loginButton: {
    marginTop: 16,
    flex: 0.5,
    backgroundColor: "black",
    borderRadius: 16,
    padding: 16,
  },
  loginButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  icon: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 16,
    padding: 8,
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
