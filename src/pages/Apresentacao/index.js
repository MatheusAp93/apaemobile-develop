import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Apresentacao() {
  const navigation = useNavigation()

  function onPress() {
    navigation.navigate('CadastroScreen')
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={require('../../assets/bg.png')} style={styles.bg} />
        <View style={styles.containerImages}>
          <View style={styles.containerRiscos}>
            <Image
              style={styles.riscoLeft}
              source={require('../../assets/decoLeft.png')}
            />
            <Image
              style={styles.riscoRight}
              source={require('../../assets/decoRight.png')}
            />
          </View>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../assets/logoApae.png')}
            />
          </View>
        </View>
        <View style={styles.containerCard}>
          <View>
            <Text style={styles.bemVindoText}>BEM-VINDOS A</Text>
          </View>
          <View>
            <Text style={styles.bemVindoApae}>APAE</Text>
          </View>
          <View>
            <Text style={styles.descText}>
              Aqui você sonhará conosco! E irá colaborar com essa missão, pois
              protagonismo e cidadania se constroem assim: dando visibilidade a
              quem precisa voar mais alto!
            </Text>
          </View>

          <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.titleButton}>PARTICIPAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  bg: { flex: 1, position: 'absolute', width: '100%', height: '100%' },
  container: {
    flex: 1
  },
  background: {
    flex: 1
  },
  containerImages: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logoContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1
  },

  logo: {
    width: 242,
    height: 242
  },
  containerRiscos: {
    position: 'absolute',
    left: 0,
    top: 0
  },
  riscoLeft: {
    position: 'absolute'
  },
  riscoRight: {
    left: 220
  },
  //CARD
  containerCard: {
    flex: 3,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  containerTexto: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 32,
    paddingVertical: 12,
    backgroundColor: '#988BDD',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleButton: {
    fontFamily: 'Montserrat_600SemiBold',
    color: 'white',
    fontSize: 14,
    lineHeight: 24
  },
  bemVindoText: {
    fontFamily: 'Itim_400Regular',
    color: '#988BDD',
    fontSize: 19.5,
    lineHeight: 23.41
  },
  bemVindoApae: {
    marginTop: 6,
    fontFamily: 'Itim_400Regular',
    fontSize: 26.23,
    lineHeight: 31.47
  },
  descText: {
    marginLeft: 48,
    marginRight: 48,
    marginTop: 21,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: '#9DA1AB'
  }
})
