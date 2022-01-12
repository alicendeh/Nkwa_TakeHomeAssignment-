import { StyleSheet } from "react-native";
import { COLOR, WIDTH } from "../../theme";

const style = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    justifyContent: "flex-end",
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
  mainContainer: {
    width: WIDTH * 0.9,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circlo: {
    width: 80,
    height: 80,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative",
    top: -30,
  },
});

export default style;
