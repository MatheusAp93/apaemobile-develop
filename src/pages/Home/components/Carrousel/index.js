import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Image, Dimensions, FlatList, SafeAreaView, TouchableHighlight, Animated,} from "react-native";

import { useNavigation } from '@react-navigation/native';
import Paginator from "./Paginator";
//variaveis auxiliares
const WIDTH_SREEN = Dimensions.get('window').width

import Banner from '../../../../assets/banner.png'

const data = [ 
  Banner,
  Banner,
  Banner,
]

//função de passagem automatica do carousel
function timerScroll(dataList){
  const numData = dataList.length
  let scrollValue = 0, scrolled = 0

  setInterval(()=>{
    scrolled ++
    if(scrolled < numData) scrollValue += WIDTH_SREEN
    else{
      scrollValue = 0
      scrolled = 0
    }

    this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
  }, 3000)

}

//função principal
function Carrousel(){
  const [dataList, setDataList] = useState(data);
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const B = (props) => <Text style={{color:'#776ABC',}}>{props.children}</Text>

  useEffect(()=>{
    setDataList(data)
    timerScroll(dataList)
  })
  return (
    <SafeAreaView style = {styles.container}>
        <Text style={styles.textTitle}>CAMPANHAS E EVENTOS</Text>
        
        <FlatList
          ref={(flatList)=>{this.flatList = flatList}}
          data={data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor ={(_, index) => index.toString()}
          renderItem={({item}) => {
            return(
              
              <View 
              style={styles.containerImage}>
                <TouchableHighlight
                  onPress={()=>navigation.navigate('Eventos')}
                  underlayColor = "transparent"
                >

                  <View>
                    <Image
                      style={styles.image}
                      source={item}
                    />
                      <Text style= {styles.textoPrincipal}>Campanha Ajuda <B>Solidária</B></Text>
                      <Text style= {styles.textoSecundario}>Venha fazer parte desse time</Text>
                    
                    <View style= {styles.conteinerParticipar}>
                      <Text style= {styles.participarText}>Quero Participar</Text>
                    </View>
                  </View>
                </TouchableHighlight>

              </View>
            );
          }}
          useScrollView={true}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],{
            useNativeDriver: false,
          })}
        />
        <Paginator data={data} scrollX={scrollX}/>
    </SafeAreaView>
  );
}

//estilo
const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginTop: 189,
    backgroundColor: '#FCFAFF',
  },
  textTitle:{
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 15,
    font:'Montserrat',
    fontSize: 11,
  },

  textoPrincipal:{
    flex: 1,
    position: 'absolute',
    marginLeft: 10,
    marginTop: 31,
    fontSize: 11.75,
    fontWeight: "bold",
  },
  textoSecundario:{
    flex: 1, 
    font: 'Montserrat',
    weight: 400,
    fontStyle: 'normal', 
    fontSize: 8.45, 
    color: '#484558',
    marginLeft: 20,
    marginTop: 50,
    position: "absolute",
  },
  participarText:{
    flex: 1, 
    font: 'Montserrat',
    weight: 500,
    fontStyle: 'normal', 
    fontSize: 11, 
    color: '#fff',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  containerImage:{
    width: WIDTH_SREEN,
    paddingLeft: 19,
  },
  image:{
    height: 138,
    width: WIDTH_SREEN * 0.90,
    borderRadius: 10,
  },
  conteinerParticipar:{
    flex: 1,
    backgroundColor: '#776ABC',
    position: 'absolute',
    height: 26,
    width: 118,
    marginLeft: 33,
    marginTop: 80,
    borderRadius: 24,
    justifyContent: 'center', 
  },
})

export default Carrousel;