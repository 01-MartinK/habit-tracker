import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import AddTaskButton from "./components/AddTaskButton";
import CategoryButtons from "./components/CategoryButtons";
import HabitButton from "./components/HabitButton";
import InfoBar from "./components/InfoBar";
import CreateHabitModal from "./components/Modals/CreateHabitModal";
import { GetFullDate } from "./utils/date";

const Home = () => {
  const [createModalVisible, setCreateModalVisibility] =
    useState<boolean>(false);
  const date = GetFullDate();

  return (
    <View>
      <View className="buffer" style={{ marginTop: 90 }} />
      <Text style={{ textAlign: "center" }}>{date}</Text>
      <ScrollView style={{ margin: 12, height: 580 }}>
        <View style={{ padding: 12, gap: 16 }}>
          <CategoryButtons />
          <InfoBar />
          <HabitButton
            title="Workout"
            startTime="6:00"
            time={120}
            color="#d6ae86"
            iconName="person-running"
          />
          <HabitButton
            title="Sleep"
            startTime="22:00"
            time={480}
            color="#8dced8"
            iconName="moon"
          />
          <HabitButton
            title="Yoga"
            startTime="16:00"
            time={60}
            color="#9bdec5"
            iconName="person-praying"
          />
          <AddTaskButton onPress={(event) => setCreateModalVisibility(true)} />
        </View>
      </ScrollView>
      <CreateHabitModal
        visible={createModalVisible}
        onClose={() => setCreateModalVisibility(false)}
      />
    </View>
  );
};

export default Home;
