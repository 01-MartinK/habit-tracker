import TaskButton from "@/app/components/TaskButton";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <View className="buffer" style={{ marginTop: 90 }} />
      <Text style={{ textAlign: "center" }}>30 Dec 2025</Text>
      <View style={{ padding: 24, gap: 16 }}>
        <TaskButton
          title="Workout"
          startTime="6:00"
          time={120}
          color="#d6ae86"
          iconName="person-running"
        />
        <TaskButton
          title="Sleep"
          startTime="22:00"
          time={480}
          color="#8dced8"
          iconName="moon"
        />
        <TaskButton
          title="Yoga"
          startTime="16:00"
          time={60}
          color="#9bdec5"
          iconName="person-praying"
        />
      </View>
    </View>
  );
};

export default Home;
