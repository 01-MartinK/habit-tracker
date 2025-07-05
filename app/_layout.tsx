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
          title: "Home"
        }}
      />
      <Tabs.Screen 
        name="reports"
        options={{
          title: "Report"
        }}
      />
      <Tabs.Screen 
        name="leaderboard"
        options={{
          title: "Leaderboard"
        }}
      />
    </Tabs>
  );
};

export default _layout;
