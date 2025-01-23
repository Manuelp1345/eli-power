import "../global.css";
import { Slot } from "expo-router";
import React, { useEffect } from "react";
import { View } from "react-native";
import { UserProvider } from "../context/UserContext";
import { StatusBar } from "expo-status-bar";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Layout = () => {
  const configGoogleSignIn = () => {
    GoogleSignin.configure();
  };
  useEffect(() => {
    configGoogleSignIn(); // will execute everytime the component mounts
  }, []);
  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-black ">
        <StatusBar animated={true} hidden={false} />
        <UserProvider>
          <Slot />
        </UserProvider>
      </View>
    </SafeAreaProvider>
  );
};

export default Layout;
