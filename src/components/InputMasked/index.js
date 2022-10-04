import React, { useState } from "react";
import { View, StyleSheet, } from 'react-native';
import { TextInputMask } from "react-native-masked-text";

const InputMasked = (props) => {

    return (
        <View style={styles.container}>
            <TextInputMask
                style={styles.input}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 32,
        marginLeft: 31,
        marginRight: 22,
    },
    input: {
        height: 32,
        width: '100%',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#DEE2E6',
        fontSize: 14,
        color: '#9DA1AB',
        fontWeight: '500',
        fontFamily: 'Montserrat',
    },
})

export default InputMasked
