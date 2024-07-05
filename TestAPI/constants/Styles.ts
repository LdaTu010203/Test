import { View, Text, StyleSheet, TextComponent } from "react-native";
import React from "react";
import { Colors } from "./Colors";

export const styles = StyleSheet.create({
  containerLogo: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerSignIn: {
    display: "flex",
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  containersmallSignIn: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "gray",
    paddingLeft: 10,
    flex: 1,
    alignSelf: "center",
  },
});

export const text = StyleSheet.create({
  text120: {
    fontSize: 30,
    justifyContent: "center",
  },
  text150: {
    fontSize: 50,
    justifyContent: "center",
  },
  text110: {
    fontSize: 10,
    alignSelf: "center",
  },
  text115: {
    fontSize: 15,
    alignSelf: "center",
    paddingHorizontal: 10,
    width: 100,
  },
});
