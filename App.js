import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MinhasInformacoes from './components/minhasInformacoes';
import MinhaSenha from './components/minhaSenha';
import MeuPagamento from './components/meuPagamento';
import estilos from './components/estilos';

function HomeScreen({navigation}) {

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Informações do usuário'}}/>
        <Stack.Screen name="Informações" component={MinhasInformacoes} />
        <Stack.Screen name="Senha" component={MinhaSenha} />
        <Stack.Screen name="Pagamento" component={MeuPagamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
