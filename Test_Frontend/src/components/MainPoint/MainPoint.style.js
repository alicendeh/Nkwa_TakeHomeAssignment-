import { StyleSheet } from "react-native";
import { COLOR, WIDTH } from "../../theme";

const style = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginTop: 25,
  },
  whiteContainer: {
    backgroundColor: COLOR.white,
    width: WIDTH * 0.9,
    borderRadius: 22,
    alignItems: "center",
    paddingBottom: 48,
  },
  icon: {
    marginRight: 12,
  },
  iconView: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
    marginBottom: 12,
  },
  contentContainer: {
    width: WIDTH * 0.8,
  },
  textContent: {
    alignItems: "center",
  },
  number: {
    marginTop: 12,
  },
  btn: {
    backgroundColor: COLOR.primary,
    borderRadius: 7,
    marginTop: 14,
    paddingHorizontal: 47,
    paddingVertical: 19,
  },
});

export default style;
