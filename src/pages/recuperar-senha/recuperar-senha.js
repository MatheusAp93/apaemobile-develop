import React, { useState, useCallback} from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import popupIcon from "../../assets/popupIcon.png";
import CustomControlledInput from "../../components/ControlledInputs/CustomControlledInput";
import { useForm } from "react-hook-form";

import InfoIcon from "../../assets/info-icon.png"

const RecuperarSenha = (props) => {
  const [loading, setLoading] = useState(false);
  const [visiblePopup, setVisiblePopup] = useState(false);

  const REQUIRED_MESSAGE = "* Obrigatório";
  const INVALID_EMAIL =
    "Ops! Email inválido. Verifique se está digitado corretamente.";

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const { control, handleSubmit } = useForm();

  const onPress = () => {
    setVisiblePopup(true);
  };

  const sentForgotPassword = () => {
    setVisiblePopup(false);
    props.navigation.navigate("ScreenForgotPassword");
  };

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textInfo}>
            Tudo bem! Basta informar seu email cadastrado e enviaremos um link
            de redefinição de senha.
          </Text>
        </View>
        <Text style={styles.labelInput}>Email</Text>
        <View style={styles.emailInput}>
          <CustomControlledInput
            name="email"
            control={control}
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            showBoxOnErrorType="pattern"
            rules={{
              required: REQUIRED_MESSAGE,
              pattern: { value: EMAIL_REGEX, message: INVALID_EMAIL },
            }}
          />
        </View>
        <TouchableOpacity
          onPress={handleSubmit(onPress)}
          style={styles.touchableOpacityStyle}
        >
          <Text style={styles.touchableOpacityText}>Enviar</Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Image source={InfoIcon}></Image>
          <Text style={styles.textAlert}>
            Você receberá um email com um código de redefinição de senha.
            Certifique-se de verificar sua caixa de spam.
          </Text>
        </View>
      </KeyboardAvoidingView>
      <Spinner
        //Visibilidade do overlay de carregamento
        visible={loading}
        //Texto dentro do overlay
        textContent={"Loading..."}
        //Estilo do texto
        textStyle={styles.spinnerTextStyle}
      />

      <Modal animationType="fade" transparent={true} visible={visiblePopup}>
        <View style={styles.backgroundPopup}>
          <View style={styles.cardPopup}>
            <View style={styles.containerLogoInfo}>
              <Image source={popupIcon} style={styles.logoInfo} />

              <Text style={styles.titleInfo}>LINK ENVIADO</Text>
            </View>

            <View style={styles.containerTextInfo}>
              <Text style={styles.textInfo}>
                Um código foi enviado para o seu e-mail. Lembre-se de verificar
                sua pasta de spam.
              </Text>
            </View>

            <TouchableOpacity
              style={styles.popupButton}
              onPress={sentForgotPassword}
            >
              <Text style={styles.popupButtonTitle}>ENTENDI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  emailInput: {
    width: "100%",
    paddingHorizontal: 24,
  },
  touchableOpacityStyle: {
    width: 151,
    height: 48,
    backgroundColor: "#776ABC",
    justifyContent: "center",
    borderRadius: 24,
  },
  touchableOpacityText: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "Montserrat_400Regular",
    textTransform: "uppercase",
  },
  textContainer: {
    paddingHorizontal: 24,
    marginHorizontal: 24,
    textAlign: "center",
    alignSelf: "center",
  },

  textAlert: {
    fontSize: 12,
    lineHeight: 14,
    color: "#495057",
    fontFamily: "Montserrat_400Regular",
    width: 278,
    height: 42,
    paddingLeft: 3,
  },
  infoContainer: {
    flexDirection: "row",
    borderRadius: 8,
    width: 327,
    marginHorizontal: 24,
    marginTop: 28,
    marginBottom: 32,
    backgroundColor: "#F1F3F5",
    paddingLeft: 8,
    paddingRight: 14,
    paddingVertical: 12,
  },
  labelInput: {
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 24,
    marginTop: 32,
    color: "#9DA1AB",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Montserrat_400Regular",
  },
  backgroundPopup: {
    backgroundColor: "#000000aa",
    flex: 1,
    alignItems: "center",
  },
  cardPopup: {
    backgroundColor: "#FFFFFF",
    borderRadius: 46.8537,
    width: 327,
    height: 268,
    alignItems: "center",
    top: "35%",
    justifyContent: "space-around",
  },
  containerLogoInfo: {
    alignItems: "center",
    marginTop: 29.2,
  },
  logoInfo: {
    width: 48,
    height: 48,
    marginBottom: 15.05,
  },
  titleInfo: {
    fontSize: 11.71,
    lineHeight: 12,
    color: "#9DA1AB",
    fontFamily: "Montserrat_500Medium",
    marginBottom: 19.24,
  },
  containerTextInfo: {
    width: 287.93,
  },
  textInfo: {
    marginTop: 20,
    fontSize: 13.67,
    lineHeight: 16,
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
  },
  popupButton: {
    width: 147.39,
    height: 46.85,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#776ABC",
    borderRadius: 23.43,
    marginTop: 20.52,
    marginBottom: 30.15,
  },
  popupButtonTitle: {
    color: "white",
    fontSize: 13.67,
    lineHeight: 23,
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default RecuperarSenha;
