import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React from "react";
import { styles, text } from "@/constants/Styles";
import { Link } from "expo-router";

const sign_in = () => {
  return (
    <View style={styles.containerSignIn}>
      <Text style={text.text150}>Welcome</Text>
      <Text style={text.text120}>Sign In Please!</Text>
      <View
        style={{
          flexDirection: "row",
          flex: 0,
          paddingVertical: 10,
          padding: 10,
        }}
      >
        <Text style={text.text115}>Email:</Text>
        <TextInput
          placeholder="NguyenVanLe@gmail.com"
          style={styles.textInput}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 0,
          paddingVertical: 10,
          padding: 10,
        }}
      >
        <Text style={text.text115}>Password:</Text>
        <TextInput secureTextEntry={true} style={styles.textInput}></TextInput>
      </View>
      <TouchableOpacity style={styles.textInput}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default sign_in;
