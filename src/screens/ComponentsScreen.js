import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Satyam";
  return (
    <View>
      <Text style={style.textStyle}>Getting strated with React Native!</Text>
      <Text style={style.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
