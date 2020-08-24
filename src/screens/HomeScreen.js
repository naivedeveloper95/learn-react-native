import React from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to component demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List demo"
      />
      <Button
        onPress={() => navigation.navigate("ImageScreen")}
        title="Go to Image Screen"
      />
      <Button
        onPress={() => navigation.navigate("CounterScreen")}
        title="Go to Counter Screen"
      />
      <Button
        onPress={() => navigation.navigate("ColorScreen")}
        title="Go to Color Screen"
      />
      <Button
        onPress={() => navigation.navigate("SquareScreen")}
        title="Go to Square Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
