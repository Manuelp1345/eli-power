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

export const LoginContainer = () => {
  const { user, loginAction } = useContext(UserContext);

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

  return (
    <View className="flex-1 bg-black justify-center items-center">
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          signIn();
        }}
      />
    </View>
  );
};
