//TELA DE ENVENTOS TESTE!

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from '@react-navigation/native';

function Eventos(){
    const navigation = useNavigation();
    return(
        <View style={style.container}>
            <Text>Eventos da apae</Text>
            <Button
                title="Voltar"
                onPress={()=>{navigation.navigate('Home')}}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Eventos