import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Input = (props) => {
  const [hidePassword, setHidePassword] = useState(props.secureTextEntry);
  return (
    <View style={[styles.container, props.customContainerStyle]}>
      <TextInput
        style={[
          styles.input,
          { borderColor: props.isInvalid ? "#DC1637" : "#DEE2E6" },
          props.customStyle,
        ]}
        {...props}
        secureTextEntry={hidePassword}
      />
      {props.secureTextEntry && (
        <Icon
          name={hidePassword ? "eye-off-outline" : "eye-outline"}
          size={20}
          color={"#776ABC"}
          style={styles.iconSenha}
          onPress={() => setHidePassword(!hidePassword)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  input: {
    height: 32,
    width: "100%",
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#DEE2E6",
    fontSize: 14,
    color: "#9DA1AB",
    fontWeight: "500",
    fontFamily: "Montserrat",
  },
  iconSenha: {
    position: "absolute",
    right: 24,
    top: 2,
  },
});

export default Input;
