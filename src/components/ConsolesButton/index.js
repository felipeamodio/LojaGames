import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function consoleButton(props){
    return(
        <View style={[styles.container, { backgroundColor: props.bgColor || '#FFFFFF'} ]}>
            <Text style={[styles.txt, { color: props.color || '#DCDCDC'} ]}>
                {props.children}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#E6E6E6',
        borderWidth: 3,
        marginHorizontal: 10,
        marginTop: 10
    },
    txt: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})