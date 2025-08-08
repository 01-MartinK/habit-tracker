import React from "react";
import { ScrollView, Text, View } from "react-native";
import LeaderboardItem from "./components/LeaderboardItem";

const dummy_data = [
  {
    place: 50,
    username: "Kevin",
    level: 1,
    streak: 5,
    achievements: ["Good runner", "Fast eater", "Good nights sleep"],
  },
  {
    place: 51,
    username: "Luna",
    level: 3,
    streak: 12,
    achievements: ["Early riser", "Mindful breather", "Yoga novice"],
  },
  {
    place: 52,
    username: "Marcus",
    level: 5,
    streak: 30,
    achievements: ["Marathon finisher", "No sugar week", "Clean desk award"],
    user: true,
  },
  {
    place: 53,
    username: "Talia",
    level: 2,
    streak: 8,
    achievements: ["Daily journaling", "No procrastination"],
  },
  {
    place: 54,
    username: "Derek",
    level: 4,
    streak: 18,
    achievements: ["10K steps master", "Meal prep wizard", "Gratitude keeper"],
  },
  {
    place: 55,
    username: "Ivy",
    level: 6,
    streak: 42,
    achievements: ["Habit queen", "Sleep champion", "Workout streak legend"],
  },
  {
    place: 56,
    username: "Nate",
    level: 1,
    streak: 3,
    achievements: [
      "First habit complete",
      "Logged in twice",
      "Hydration starter",
    ],
  },
  {
    place: 57,
    username: "Sasha",
    level: 7,
    streak: 55,
    achievements: ["Power user", "Meditation master", "Stretch streak"],
  },
  {
    place: 58,
    username: "Leo",
    level: 2,
    streak: 9,
    achievements: ["Social detox", "Read daily", "No snooze streak"],
  },
  {
    place: 59,
    username: "Zara",
    level: 3,
    streak: 15,
    achievements: ["Consistent coder", "Healthy snacker", "Focused study time"],
  },
  {
    place: 60,
    username: "Omar",
    level: 4,
    streak: 20,
    achievements: ["Daily learner", "Early bedtime", "Habit stacker"],
  },
];

const Leaderboard = () => {
  const user = dummy_data.find((a) => a.user);

  return (
    <View>
      <View className="buffer" style={{ marginTop: 90 }} />
      <Text style={{ textAlign: "center" }}>region: UK</Text>
      <View
        style={{
          height: 128,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 64, textAlign: "center" }}>{user?.place}</Text>
        <Text>position</Text>
      </View>
      <ScrollView style={{ margin: 12, height: 450 }}>
        <View style={{ gap: 4 }}>
          {dummy_data.map((user, i) => {
            return (
              <LeaderboardItem
                key={`${i}_${user.username}`}
                username={user.username}
                streak={user.streak}
                achievements={user.achievements}
                place={user.place}
                isUser={user.user ? user.user : false}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Leaderboard;
