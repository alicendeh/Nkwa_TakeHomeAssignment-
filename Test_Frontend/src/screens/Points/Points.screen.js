import React from "react";
import { View, Text, SafeAreaView, Platform } from "react-native";
import styles from "./Points.style";
import { BottomTab, Header, MainPoint, PointsEarned } from "../../components";

const Points = () => {
  return (
    <View style={styles.main}>
      {Platform.OS === "ios" ? (
        <View style={styles.container}>
          <Header />
        </View>
      ) : (
        <SafeAreaView>
          <Header />
        </SafeAreaView>
      )}
      <MainPoint />
      <PointsEarned />
      <BottomTab />
    </View>
  );
};

export default Points;
