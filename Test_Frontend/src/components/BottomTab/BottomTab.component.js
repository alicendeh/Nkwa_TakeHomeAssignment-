import React from "react";
import { View, Text } from "react-native";
import styles from "./BottomTab.style";
import { IconContainer } from "../../components";
import { COLOR } from "../../theme";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

const BottomTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <IconContainer borderColor={COLOR.primary} w={40} h={40}>
          <Feather name="user" size={33} color={COLOR.primary} />
        </IconContainer>
        <View style={styles.circlo}>
          <IconContainer borderColor={COLOR.primary} w={50} h={50}>
            <Feather name="plus" size={33} color={COLOR.primary} />
          </IconContainer>
        </View>
        <AntDesign name="book" size={33} color={COLOR.primary} />
      </View>
    </View>
  );
};

export default BottomTab;
