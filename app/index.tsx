import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { getUser } from "../storage/userStorageAsync";
import { router } from "expo-router";

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
      <Text className="text-green-500 font-extrabold text-[36px]">
        Eli Power
      </Text>
    </View>
  );
};

export default Index;
