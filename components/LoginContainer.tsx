import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  SignInSuccessResponse,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { UserContext, UsuarioActionType } from "../context/UserContext";
import { Text } from "react-native-paper";
import { Image } from "expo-image";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

export const LoginContainer = () => {
  const { user, loginAction } = useContext(UserContext);
  const opacity = useSharedValue(0);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        loginAction({
          type: UsuarioActionType.LOGIN,
          data: response.data,
        });
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      console.log(error);
      if (isErrorWithCode(error)) {
        console.log(error.code);
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  const style = useAnimatedStyle(() => {
    return {
      display: user ? "none" : "flex",
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000 });
  }, []);

  return (
    <View className="flex-1 bg-black justify-center items-center relative">
      <Image
        source={require("../assets/bg1Logo.jpg")}
        contentFit="cover"
        transition={1000}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          flex: 1,
        }}
      />
      <Animated.View style={[{ opacity: 0 }, style]}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {
            signIn();
          }}
        />
      </Animated.View>
    </View>
  );
};
