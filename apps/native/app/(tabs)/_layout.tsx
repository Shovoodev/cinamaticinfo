import { TabBarIcon } from "@/components/tabbar-icon";
import { useColorScheme } from "@/lib/use-color-scheme";
import { Tabs } from "expo-router";
import { ImageBackground, View } from "react-native";

export default function TabLayout() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: " 100%",
          height: "100%",
          padding: 4,
        },
        headerShown: false,
        tabBarActiveTintColor: isDarkColorScheme
          ? "hsl(217.2 91.2% 59.8%)"
          : "hsl(221.2 83.2% 53.3%)",
        tabBarInactiveTintColor: isDarkColorScheme
          ? "hsl(215 20.2% 65.1%)"
          : "hsl(215.4 16.3% 46.9%)",
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderColor: "#ofod23",
          borderTopColor: isDarkColorScheme
            ? "hsl(217.2 32.6% 17.5%)"
            : "hsl(214.3 31.8% 91.4%)",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="home"
              focused={focused}
              color={`${focused ? color : "white"}`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="search"
              focused={focused}
              color={`${focused ? color : "white"}`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="bookmark"
              focused={focused}
              color={`${focused ? color : "white"}`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="user"
              focused={focused}
              color={`${focused ? color : "white"}`}
            />
          ),
        }}
      />
    </Tabs>
  );
}
