import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function InfoUser({navigation}) {

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require("../../../assets/fonts/Montserrat-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <ScrollView>
        <View style={estilos.container}>
          <View style={estilos.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Informações")}>
              <View style={estilos.item}>
                <View>
                  <FontAwesome5
                    name="user"
                    size={18}
                    color="white"
                    style={estilos.icone}
                  />
                </View>
                <View style={estilos.opcaoUsuario}>
                  <Text style={estilos.texto}> Minhas informações</Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={30}
                    color="#776ABC"
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.navigate("Senha")}>
              <View style={estilos.item}>
                <View>
                  <Ionicons
                    name="ios-key-outline"
                    size={17}
                    color="white"
                    style={estilos.icone}
                  />
                </View>
                <View style={estilos.opcaoSenha}>
                  <Text style={estilos.texto}>Alterar senha</Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={30}
                    color="#776ABC"
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.navigate("Pagamento")}>
              <View style={estilos.item}>
                <View>
                  <Ionicons
                    name="md-card-outline"
                    size={19}
                    color="white"
                    style={estilos.icone}
                  />
                </View>
                <View style={estilos.opcaoPagamento}>
                  <Text style={estilos.texto}>Formas de pagamento</Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={30}
                    color="#776ABC"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#FCFAFF',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    lineHeight: 12,
    marginLeft: 8,
  },
  opcaoUsuario: {
    borderBottomColor: '#DEE2E6',
    borderBottomWidth: 1,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  opcaoSenha: {
    borderBottomColor: '#DEE2E6',
    borderBottomWidth: 1,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  opcaoPagamento: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  icone: {
    backgroundColor: '#776ABC',
    padding: 12,
    borderRadius: 10,
  },
});


export default InfoUser;