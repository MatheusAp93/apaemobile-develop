import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RecuperarSenha from "../pages/recuperar-senha/recuperar-senha";
import Apresentacao from "../pages/Apresentacao";
import { useFonts, Itim_400Regular } from "@expo-google-fonts/itim";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_500Medium
} from "@expo-google-fonts/montserrat";
import CadastroScreen from "../pages/Cadastro";
import Home from "../pages/Home";
import ScreenTest from "../pages/ScreenTest";
import Eventos from "../pages/Eventos";
import InfoUser from "../pages/Perfil/Card-informacoes/InfoUser";
import MinhasInformacoes from "../pages/Perfil/minhasInformacoes";
import MinhaSenha from "../pages/Perfil/minhaSenha";
import MeuPagamento from "../pages/Perfil/meuPagamento";


const Stack = createNativeStackNavigator();

function Routes() {
  const [fontsLoaded] = useFonts({
    Itim_400Regular,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName="Apresentacao"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Apresentacao" component={Apresentacao} />
      <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
      <Stack.Screen name="ScreenTest" component={ScreenTest} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CardInformacoes" component={InfoUser} options={{title: 'Informações do usuário'}}/>
      <Stack.Screen name="Informações" component={MinhasInformacoes} />
      <Stack.Screen name="Senha" component={MinhaSenha} />
      <Stack.Screen name="Pagamento" component={MeuPagamento} />

      <Stack.Screen
        name="RecuperarSenha"
        component={RecuperarSenha}
        options={{ headerTitleAlign: "center", headerShadowVisible: false }}
      />

      <Stack.Screen
        name="Eventos"
        component={Eventos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
