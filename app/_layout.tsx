import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GetDay } from "./utils/date";

const _layout = () => {
  const day = GetDay();
  return (
    <SafeAreaProvider>
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{
            headerTransparent: true,
            headerTitle: `Hello, ${day}`,
            title: "Home",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Tabs.Screen
          name="reports"
          options={{
            headerTransparent: true,
            title: "Report",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Tabs.Screen
          name="leaderboard"
          options={{
            headerTransparent: true,
            title: "Leaderboard",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
};

export default _layout;
