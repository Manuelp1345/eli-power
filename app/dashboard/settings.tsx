import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React, { useContext } from "react";
import {
  View,
  Text,
  Pressable,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { UserContext, UsuarioActionType } from "../../context/UserContext";
import { router } from "expo-router";

const Settings = () => {
  const { user, loginAction } = useContext(UserContext);

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      loginAction({
        type: UsuarioActionType.LOGOUT,
        data: null,
      });
      router.replace("/", {
        withAnchor: true,
        relativeToDirectory: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="flex-1  bg-black justify-center items-center">
      <View className="flex-1 justify-center items-center">
        <Text className="text-white">settings</Text>
      </View>

      <View className="flex-3 justify-center items-center pb-5 w-full px-5">
        <TouchableOpacity
          onPress={signOut}
          className="bg-red-500 px-5 py-2 rounded-lg w-full justify-center items-center"
        >
          <Text className="text-white">Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
