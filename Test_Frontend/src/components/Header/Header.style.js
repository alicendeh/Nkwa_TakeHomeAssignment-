import { StyleSheet } from "react-native";
import { COLOR, WIDTH } from "../../theme";

const style = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLOR.primary,
    height: 105,
    borderBottomRightRadius: 27,
    borderBottomLeftRadius: 27,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  mainContainer: {
    width: WIDTH * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 12,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default style;
