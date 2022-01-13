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
    borderRadius: 15,
    marginVertical: 12,
    flexDirection: "row",
    // paddingVertical: 15,
  },
  iconView: {
    backgroundColor: COLOR.primary,
    width: WIDTH * 0.13,
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    // borderTopRightRadius: 4,
    // borderBottomRightRadius: 4,
    padding: 7,
    zIndex: 2,
  },
  infoView: {
    width: "70%",
    marginLeft: 31,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 17,
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
