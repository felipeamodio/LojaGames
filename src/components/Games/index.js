import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';


function filterDesc(desc){
    if(desc.length < 20){
        return desc;
    }
    return `${desc.substring(0, 17)}...`;
}


export default function Games(props){
//recebendo o valor de props pelas propriedades informadas no App.js
    return(
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image 
                source={props.img}
                style={styles.gamesImg}
            />
            <Text style={styles.gamesTxt}>
                {filterDesc(props.children)}
            </Text>
            <Text style={styles.priceTxt}>
                {props.cost}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gamesImg: {
        width: 135,
        height: 175
    },
    gamesTxt: {
        fontSize: 20,
        fontFamily: 'Karla_400Regular',
        marginTop: 5
    },
    priceTxt: {
        opacity: 0.5,
        marginTop: 3,
        fontFamily: 'Karla_400Regular',
        fontSize: 18
    }
})