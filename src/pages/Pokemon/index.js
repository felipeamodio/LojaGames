import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ConsolesButton from '../../components/ConsolesButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';


export default function Details({ navigation }){
//mudando o titulo da página
    navigation.setOptions({
        headerTitle: 'POKEMON - LETS GO PIKACHU'
    })

    return(
        <ScrollView style={styles.container}>
            <Image 
              source={require('../../imgs/pokemon.jpg')}
              style={styles.img}
              resizeMode= "cover"
            />

            <View>
                <View>
                    <Text style={styles.price}>R$129,99</Text>
                </View>

                <View opacity={0.5}>
                    <Text style={styles.title}>POKEMON - LET'S GO PIKACHU</Text>
                </View>


                <View style={{flexDirection: 'row', width: '100%'}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <ConsolesButton bgColor="#17181A" color="#FFFFFF">SWITCH</ConsolesButton>
                    </ScrollView>
                </View>

                <View style={styles.txtContent}>
                    <Text style={styles.txtTitle}>POKEMON - LET'S GO PIKACHU</Text>
                    <Text style={styles.txtDescription}>
                    Pokémon: Let's Go, Pikachu! Leve a sua jornada Pokémon para a região de Kanto ao lado do seu 
                    parceiro cheio de energia, o Pikachu! ... Pokémon selvagens de tamanho natural vagam pelo jogo - capture-os 
                    como um verdadeiro Treinador de Pokémon usando tempo correto e uma Poké Ball bem colocada.
                    </Text>
                    <Text style={[styles.txtList, { marginTop: 5 }]}>- CATEGORIA: RPG, AVENTURA </Text>
                    <Text style={styles.txtList}>- EMPRESA: NINTENDO </Text>
                </View>

                <Button />

                <View style={styles.line}/>

                <Footer />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    img: {
        width: '100%',
        height: 400
    },
    price: {
        fontFamily: 'Karla_400Regular',
        fontSize: 27,
        paddingHorizontal: '2%',
        marginTop: 5
    },
    title: {
        fontFamily: 'Karla_700Bold',
        fontSize: 30,
        paddingHorizontal: '2%'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%'
    },
    txtContent: {
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%',
        fontFamily: 'Karla_400Regular'
    },
    txtTitle: {
        fontSize: 22,
        marginVertical: '2%',
        fontFamily: 'Karla_700Bold'
    },
    txtList: {
        fontSize: 16,
        lineHeight: 25,
        fontFamily: 'Karla_400Regular'
    },
    line: {
        borderWidth: 1.5,
        borderBottomColor: '#191970',
        marginVertical: '2%'
    }
})