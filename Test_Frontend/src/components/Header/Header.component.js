import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./Header.style";
import { StatusBar } from "expo-status-bar";
import { Container, Text } from "../../components";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLOR } from "../../theme";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <StatusBar style="light" backgroundColor="red" />
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text color={COLOR.white} fs={18}>
            Dashboard
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.container}>
            <Entypo
              name="chat"
              size={28}
              style={styles.icon}
              color={COLOR.white}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
            <Ionicons
              name="notifications"
              style={styles.icon}
              size={28}
              color={COLOR.white}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.container}>
            <Entypo name="star" size={28} color={COLOR.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
