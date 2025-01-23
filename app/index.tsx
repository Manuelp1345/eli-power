import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { getUser } from "../storage/userStorageAsync";
import { router } from "expo-router";
import { Image } from "expo-image";

const Index = () => {
  useEffect(() => {
    getUser().then((usuario) => {
      console.log("usuario", usuario);

      if (!usuario) {
        console.log("No hay usuario");
        return router.replace("./login");
      }
      router.replace("./dashboard/", {
        withAnchor: true,
      });
    });
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Image
        style={{ flex: 1, width: 250, height: 250 }}
        className="w-20 h-20"
        contentFit="contain"
        transition={1000}
        source={require("../assets/adaptive-icon.png")}
      />
    </View>
  );
};

export default Index;
