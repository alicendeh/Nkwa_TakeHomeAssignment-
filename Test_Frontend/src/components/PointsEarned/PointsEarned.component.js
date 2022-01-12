import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Text, IconContainer } from "../../components";
import styles from "./PointsEarned.style";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLOR } from "../../theme";
import axios from "axios";
import moment from "moment";

const PointsEarned = () => {
  const [pointsEarned, setPointsEarned] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPointsEarned();
  }, []);

  const getPointsEarned = async () => {
    setIsLoading(true);
    let res = await axios.get(`https://nkwatestapi.herokuapp.com/list/${1}`);
    setPointsEarned(res.data.totalPoints);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.pointsHeader}>
          <Text bold fs={14} color={COLOR.text}>
            Recent points earned
          </Text>
          <IconContainer w={20} h={20} borderColor={COLOR.primary}>
            <Entypo name="chevron-down" size={15} color={COLOR.primary} />
          </IconContainer>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLOR.primary} />
          ) : (
            <FlatList
              data={pointsEarned}
              keyExtractor={(_, index) => index}
              renderItem={({ item }) => (
                <View style={styles.parentItem}>
                  <View style={styles.iconView}>
                    <AntDesign name="star" size={22} color={COLOR.white} />
                  </View>
                  <View style={styles.whiteBox}></View>
                  <View style={styles.infoView}>
                    <Text bold fs={11}>
                      {/* {moment(item.date, "MM-DD-YYYY")} */}
                      {moment(item.date).format("MMMM Do YYYY")}
                    </Text>
                    <Text bold fs={11}>
                      {item.title}
                    </Text>
                    <Text bold fs={11}>
                      {item.points} pts
                    </Text>
                  </View>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default PointsEarned;
