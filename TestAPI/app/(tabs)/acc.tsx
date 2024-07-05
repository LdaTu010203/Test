import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "@/constants/Styles";
import { Link } from "expo-router";

const acc = () => {
  return (
    <View style={styles.containerSignIn}>
      <View style={{ ...styles.Button, backgroundColor: "gray" }}>
        <Link href={"/(auth)/sign_in"}>
          <Text>Sign Out</Text>
        </Link>
      </View>
    </View>
  );
};

export default acc;
