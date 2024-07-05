import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { styles, text } from "@/constants/Styles";
import { Link, router } from "expo-router";

const home = router.push("/(tabs)/home");

const SignInEffect = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
};

const SignIn = () => {
  return (
    <View style={styles.containerSignIn}>
      <Text style={text.text150}>Welcome</Text>
      <Image />
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
      <View style={{ flexDirection: "row" }}>
        <View style={{ ...styles.Button, backgroundColor: "blue" }}>
          <Link href={"/(tabs)/home"}>
            <Text style={text.textButton}>Sign In</Text>
          </Link>
        </View>
        <View style={{ ...styles.Button, backgroundColor: "pink" }}>
          <Link href={"./sign_up"}>
            <Text style={text.textButton}>Sign Up</Text>
          </Link>
        </View>
        <View style={{ ...styles.Button, backgroundColor: "gray" }}>
          <Link href={"/(tabs)/home"}>
            <Text style={text.textButton}>Guest</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
