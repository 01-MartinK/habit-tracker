import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import AddTaskButton from "./components/AddTaskButton";
import CategoryButtons from "./components/CategoryButtons";
import HabitButton from "./components/HabitButton";
import InfoBar from "./components/InfoBar";
import CreateHabitModal from "./components/Modals/CreateHabitModal";
import { GetFullDate } from "./utils/date";

enum Categories {
  OVERALL = -1,
  DAILY = 0,
  WEEKLY = 1,
}

const dummy_data = [
  {
    title: "workout",
    start_time: "6:00",
    time: 120,
    color: "#d6ae86",
    icon: "person-running",
    type: 0,
  },
  {
    title: "Sleep",
    start_time: "22:00",
    time: 480,
    color: "#8dced8",
    icon: "moon",
    type: 0,
  },
  {
    title: "Yoga",
    start_time: "16:00",
    time: 120,
    color: "#9bdec5",
    icon: "person-praying",
    type: 0,
  },
  {
    title: "Mouth exercises",
    start_time: "8:00",
    time: 10,
    color: "#d6ae86",
    icon: "person-running",
    type: 1,
  },
];

const Home = () => {
  const [createModalVisible, setCreateModalVisibility] =
    useState<boolean>(false);
  const date = GetFullDate();
  const [category, setCategory] = useState<Categories>(0);

  return (
    <View>
      <View className="buffer" style={{ marginTop: 90 }} />
      <Text style={{ textAlign: "center" }}>{date}</Text>
      <ScrollView style={{ margin: 12, height: 580 }}>
        <View style={{ padding: 12, gap: 16 }}>
          <CategoryButtons OnCategoryChange={(index) => setCategory(index)} />
          <InfoBar />
          {dummy_data.map((habit, i) => {
            if (habit.type === category || category === Categories.OVERALL)
              return (
                <HabitButton
                  key={habit.title}
                  title={habit.title}
                  time={habit.time}
                  startTime={habit.start_time}
                  color={habit.color}
                  iconName={habit.icon}
                />
              );
          })}
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
