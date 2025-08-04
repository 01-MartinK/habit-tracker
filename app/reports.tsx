import React from "react";
import { Image, ScrollView, View } from "react-native";
import LevelBar from "./components/LevelBar";
import StreakBar from "./components/StreakBar";
import StreakDisplayBox from "./components/StreakDisplayBox";

const Reports = () => {
  return (
    <View>
      <View className="buffer" style={{ marginTop: 90 }} />
      <ScrollView style={{ margin: 12, height: 600, borderRadius: 16 }}>
        <View style={{ height: 160 }}>
          <Image
            style={{
              width: 320,
              height: 320,
            }}
            source={{
              uri: "https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-flat-character-design-vector-material-png-image_13183387.png",
            }}
          />
        </View>
        <View style={{ padding: 12, gap: 16 }}>
          <LevelBar />
          <StreakBar />
          <StreakDisplayBox />
        </View>
      </ScrollView>
    </View>
  );
};

export default Reports;
