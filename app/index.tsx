import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearGradient colors={['#808080', '#000000']}
      style={{flex:1}}></LinearGradient>
    </View>
  );
}
