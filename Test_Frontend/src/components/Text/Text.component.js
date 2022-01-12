import React from "react";
import { Text as RNText } from "react-native";
import { COLOR } from "../../theme";

const Text = ({ children, color, fs, bold, textStyle }) => {
  return (
    <RNText
      style={[
        textStyle,
        {
          color: color ? color : COLOR.black,
          fontSize: fs ? fs : 16,
          fontWeight: bold ? "bold" : "normal",
        },
      ]}
    >
      {children}
    </RNText>
  );
};

export default Text;
