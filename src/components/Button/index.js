import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLinkProps, useNavigation } from '@react-navigation/native';

export default function Button(){

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.txtButton}>ADICIONAR AO CARRINHO</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        width: '85%',
        height: 50,
        backgroundColor: '#17181A',
        borderRadius: 5,
        marginVertical: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtButton: {
        fontSize: 17,
        color: '#FFFFFF',
        fontFamily: 'Karla_700Bold'
    }
})