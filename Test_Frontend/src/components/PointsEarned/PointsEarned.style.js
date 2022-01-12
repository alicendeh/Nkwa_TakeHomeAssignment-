import { StyleSheet } from "react-native";
import { COLOR, WIDTH } from "../../theme";

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  mainContainer: {
    width: WIDTH * 0.9,
    flex: 1,
  },
  pointsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 17,
    alignItems: "center",
  },
  parentItem: {
    backgroundColor: COLOR.white,
    borderRadius: 12,
    marginVertical: 12,
    flexDirection: "row",
  },
  iconView: {
    backgroundColor: COLOR.primary,
    width: WIDTH * 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: 7,
    zIndex: 2,
  },
  infoView: {
    width: "70%",
    marginLeft: 31,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  whiteBox: {
    width: 21,
    height: 40,
    borderRadius: 15,
    backgroundColor: COLOR.primary,
    position: "relative",
    left: -18,
  },
});

export default style;
