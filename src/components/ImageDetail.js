import React from "react";
import { View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetail;
