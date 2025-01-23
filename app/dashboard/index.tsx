import { Image } from "expo-image";
import React from "react";
import { View, Text } from "react-native";

const Dashboard = () => {
  return (
    <View className="flex-1  bg-black justify-center items-center relative">
      <Image
        source={require("../../assets/bg1.jpg")}
        contentFit="cover"
        transition={1000}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          flex: 1,
        }}
      />
      <Text className="text-white">Dashboard</Text>
    </View>
  );
};

export default Dashboard;
