import { SplashScreen, Stack, Tabs } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SlashCreen from "expo-splash-screen";
import { AntDesign, Ionicons } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();
const Layout = () => {
  const [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/AOKBuenosAiresBold.ttf"),
    BoldItalic: require("../assets/fonts/AOKBuenosAiresBoldItalic.ttf"),
    Italic: require("../assets/fonts/AOKBuenosAiresSemiBoldItalic.ttf"),
    LightItalic: require("../assets/fonts/AOKBuenosAiresRegularItalic.ttf"),
    Light: require("../assets/fonts/AOKBuenosAiresRegular.ttf"),
    Regular: require("../assets/fonts/AOKBuenosAiresSemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#525a74",
        tabBarBackgroundColor: "#1f2847",
        tabBarShowLabel: false,
        tabBarStyle:{
          backgroundColor: "#1f2847",
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          borderBottomStartRadius: 10,
          borderBottomEndRadius:10,
          height:70
        },
      }}
      onLayout={onLayoutRootView}
    >
      <Tabs.Screen  name="index" options={{tabBarIcon: ({focused, color, size}) => <AntDesign  name="home" size={24} color={color}/>}} />
      <Tabs.Screen name="User" options={{tabBarIcon: ({focused, color, size}) => <Ionicons  name="ios-person-outline" size={24} color={color}/>}} />
     <Tabs.Screen name="options" options={{tabBarIcon: ({focused, color, size}) => <Ionicons  name="options-outline" size={24} color={color}/>}} />
    </Tabs>
  );
};
export default Layout;
