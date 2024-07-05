import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, Slot } from "expo-router";
import { StyleSheet } from "react-native";
import { styles, text } from "@/constants/Styles";
const Index = () => {
  return (
    <View style={styles.containerLogo}>
      <TouchableOpacity>
        <Link href="./sign_in">
          <Text style={text.text150}>Let's go!</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
