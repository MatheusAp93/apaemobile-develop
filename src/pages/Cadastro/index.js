import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Input from "../../components/Input";
import InputMasked from "../../components/InputMasked";
import { TextInputMask } from "react-native-masked-text";
import Spinner from "react-native-loading-spinner-overlay";

const CadastroScreen = (props) => {
  const [ddd, setDdd] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cpf, setCpf] = useState("");
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const onPress = () => {
    startLoading();
    setTimeout(() => {
      props.navigation.navigate("ScreenTest");
    }, 2000);
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: "#BF96E1", width: "100%" }}>
        <View style={{ height: 267 }}>
          <Image
            style={styles.backgroundImg}
            source={require("../../assets/apae-background.png")}
          ></Image>
        </View>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.opcoesUsuario}>
            <TouchableOpacity>
              <Text style={[styles.opcoesTexto, { marginRight: 40 }]}>
                Entrar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.opcoesTexto, { color: "#302A4B" }]}>
                Cadastrar
              </Text>
              <Text style={styles.underlineBottom}></Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerPhone}>
            <TextInputMask
              type={"cel-phone"}
              options={{
                maskType: "BRL",
                withDDD: true,
                dddMask: "99",
              }}
              maxLength={2}
              placeholder="DDD"
              value={ddd}
              onChangeText={setDdd}
              style={[styles.inputPhone, { marginRight: 24, width: 95 }]}
            />
            <TextInputMask
              type={"cel-phone"}
              options={{
                maskType: "BRL",
                withDDD: false,
              }}
              placeholder="Número de Telefone"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={[styles.inputPhone, { flex: 2 }]}
            />
          </View>

          <View style={{ width: "100%" }}>
            <Input
              placeholder="E-mail"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Input placeholder="Primeiro Nome" />
            <Input placeholder="Sobrenome" />
            <InputMasked
              placeholder="CPF"
              type={"cpf"}
              value={cpf}
              onChangeText={setCpf}
            />
            <Input placeholder="Senha" secureTextEntry />
            <Input placeholder="Confirmar Senha" secureTextEntry />
          </View>

          <Text style={styles.textTermoDeUso}>
            Ao se cadastrar você estará concordando com nossos Termos de Uso
          </Text>

          <TouchableOpacity
            onPress={onPress}
            style={styles.TouchableOpacityStyle}
          >
            <Text style={styles.TouchableOpacityText}>CADASTRAR</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <Spinner
          //Visibilidade do overlay de carregamento
          visible={loading}
          //Texto dentro do overlay
          textContent={"Loading..."}
          //Estilo do texto
          textStyle={styles.spinnerTextStyle}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 700,
    top: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  containerPhone: {
    flexDirection: "row",
    marginBottom: 32,
    paddingLeft: 31,
    paddingRight: 22,
    width: "100%",
  },
  inputPhone: {
    height: 32,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#DEE2E6",
    fontSize: 14,
    color: "#9DA1AB",
    fontWeight: "500",
    fontFamily: "Montserrat_400Regular",
  },
  textTermoDeUso: {
    fontSize: 14,
    lineHeight: 17,
    marginLeft: 31,
    marginRight: 22,
    color: "#C5C3D4",
    fontFamily: "Montserrat_400Regular",
  },
  opcoesUsuario: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 27,
    marginBottom: 40,
  },
  opcoesTexto: {
    fontSize: 14,
    color: "#9DA1AB",
    fontWeight: "600",
    textTransform: "uppercase",
    fontFamily: "Montserrat_600SemiBold",
  },
  TouchableOpacityStyle: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: "#776ABC",
    marginTop: 40,
    justifyContent: "center",
    borderRadius: 24,
  },
  TouchableOpacityText: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
    fontFamily: "Montserrat",
  },
  backgroundImg: {
    width: "100%",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
  underlineBottom: {
    top: -20,
    right: -56,
    borderBottomWidth: 1,
    borderBottomColor: "#988BDD",
    width: 33,
  },
});

export default CadastroScreen;
