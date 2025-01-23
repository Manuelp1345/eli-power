import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome5";

const DICT_TABS: Record<string, string> = {
  index: "Inicio",
  settings: "Configuración",
};

const Layout = () => {
  return (
    <View className="flex-1 bg-black ">
      <StatusBar />
      <Tabs
        screenOptions={{
          header({ route }) {
            return (
              <View className="mt-5 flex-row justify-between items-center p-4 bg-black">
                <Text className="text-white font-bold text-[24px]">
                  Eli Power - {DICT_TABS[route.name]}
                </Text>
              </View>
            );
          },
          tabBarBackground: () => <View className="bg-black" />,
          sceneStyle: { backgroundColor: "black" },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: () => null,
            tabBarIcon(props) {
              return <Icon name="home" size={25} color="white" solid />;
            },
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            tabBarLabel: () => null,
            tabBarIcon(props) {
              return (
                <View className="p-0 m-0">
                  <Icon name="cogs" size={25} color="white" solid />
                </View>
              );
            },
          }}
        />
      </Tabs>
    </View>
  );
};

export default Layout;
