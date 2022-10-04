import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MinhasInformacoes from './components/minhasInformacoes';
import MinhaSenha from './components/minhaSenha';
import MeuPagamento from './components/meuPagamento';
import InfoUser from './components/InfoUser';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={InfoUser} options={{title: 'Informações do usuário'}}/>
        <Stack.Screen name="Informações" component={MinhasInformacoes} />
        <Stack.Screen name="Senha" component={MinhaSenha} />
        <Stack.Screen name="Pagamento" component={MeuPagamento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
