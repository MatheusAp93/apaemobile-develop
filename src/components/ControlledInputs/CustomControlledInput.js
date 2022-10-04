import React from "react";
import InputMasked from "../InputMasked";
import { Controller } from "react-hook-form";
import Input from "../Input";
import { StyleSheet, View, Text } from "react-native";
import ErrorBox from "../ErrorBox/error_box";

const CustomControlledInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  type,
  showBoxOnErrorType,
  options = {},
  ...rest
}) => {
  function handleErrorShowing(errorToCompare) {
    if (errorToCompare?.type == showBoxOnErrorType) {
      return <ErrorBox message={errorToCompare.message} />;
    }

    if (errorToCompare) {
      return <Text style={styles.error}>{errorToCompare.message}</Text>;
    }
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => {
        console.log(error);
        return (
          <View style={{ flexDirection: "column", width: "100%" }}>
            <View style={{ flexDirection: "row" }}>
              {type ? (
                <InputMasked
                  type={type}
                  options={options}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  isInvalid={!!error}
                  {...rest}
                />
              ) : (
                <Input
                  isInvalid={!!error}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  secureTextEntry={secureTextEntry}
                  {...rest}
                />
              )}
            </View>
            {error ? (
              handleErrorShowing(error)
            ) : (
              <View style={styles.sizedBox} />
            )}
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  error: {
    color: "#DC1637",
    fontFamily: "Montserrat",
    fontSize: 12,
    lineHeight: 12,
    marginLeft: 7,
    marginTop: 5,
    fontWeight: "500",
    marginBottom: 23,
  },
  sizedBox: {
    height: 32,
  },
});

export default CustomControlledInput;