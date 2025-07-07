import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs
      tabBar={props => <TabBar {...props} />}
    >
      <Tabs.Screen 
        name="index"
        options={{
          headerTransparent: true,
          headerTitle: "Hello, Tuesday",
          title: "Home",
          headerTitleStyle: {
            fontSize: 20,
          }
        }}
        />
      <Tabs.Screen 
        name="reports"
        options={{
          headerTransparent: true,
          title: "Report",
          headerTitleStyle: {
            fontSize: 20,
          }
        }}
        />
      <Tabs.Screen 
        name="leaderboard"
        options={{
          headerTransparent: true,
          title: "Leaderboard",
          headerTitleStyle: {
            fontSize: 20,
          }
        }}
      />
    </Tabs>
  );
};

export default _layout;
