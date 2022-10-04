import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ErrorBox({ message }) {
  return (
    <View style={styles.errorContainer}>
      <Icon
        name="alert-circle-outline"
        size={20}
        color={"#E23F31"}
        style={[styles.iconStyle, { alignSelf: "center" }]}
      />
      <Text style={styles.errorText}>{message}</Text>
      <Icon
        name="close"
        size={18}
        color={"#495057"}
        style={[styles.iconStyle, { marginLeft: "auto" }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: "#FCECEA",
    borderRadius: 8,
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
    marginTop: 7,
  },

  errorText: {
    flex: 1,
    color: "#495057",
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    marginTop: 11,
    marginBottom: 6,
  },

  iconStyle: {
    padding: 8,
  },
});
