import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./IconContainer.style";

const IconContainer = ({ children, borderColor, w, h }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: borderColor ? borderColor : "#000",
          width: w ? w : 30,
          height: h ? h : 30,
        },
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default IconContainer;
