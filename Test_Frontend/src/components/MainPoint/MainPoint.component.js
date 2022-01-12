import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Container, Text, IconContainer } from "../../components";
import styles from "./MainPoint.style";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { COLOR } from "../../theme";
import axios from "axios";

const MainPoint = () => {
  const [storeTotal, setStoreTotal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTotalPoints();
  }, []);

  const getTotalPoints = async () => {
    setIsLoading(true);
    let res = await axios.get(
      `https://nkwatestapi.herokuapp.com/totalpoints/${3}`
    );
    setStoreTotal(res.data.totalPoints);
    setIsLoading(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.whiteContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.iconContainerContent}>
            <IconContainer>
              <FontAwesome5 name="grip-lines" size={20} color={COLOR.black} />
            </IconContainer>
            <IconContainer>
              <Entypo name="cross" size={20} color={COLOR.black} />
            </IconContainer>
          </View>
          <View style={styles.textContent}>
            <Text bold color={COLOR.primary}>
              Nkwa Points
            </Text>
            {isLoading ? (
              <ActivityIndicator color={COLOR.primary} size="small" />
            ) : (
              <Text textStyle={styles.number} fs={75} bold>
                {storeTotal && storeTotal}
              </Text>
            )}
            <Text fs={22} bold>
              POINTS
            </Text>
            <TouchableOpacity style={styles.btn}>
              <Text color={COLOR.white} bold>
                Redeem Points
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainPoint;
