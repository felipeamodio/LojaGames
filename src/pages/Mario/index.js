import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ConsolesButton from '../../components/ConsolesButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';


export default function Details({ navigation }){
//mudando o titulo da página
    navigation.setOptions({
        headerTitle: 'MARIO KART 8 - DELUXE'
    })

    return(
        <ScrollView style={styles.container}>
            <Image 
              source={require('../../imgs/mariokart.jpg')}
              style={styles.img}
              resizeMode= "cover"
            />

            <View>
                <View>
                    <Text style={styles.price}>R$360,00</Text>
                </View>

                <View opacity={0.5}>
                    <Text style={styles.title}>MARIO KART 8 - DELUXE</Text>
                </View>


                <View style={{flexDirection: 'row', width: '100%'}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <ConsolesButton bgColor="#17181A" color="#FFFFFF">SWITCH</ConsolesButton>
                    </ScrollView>
                </View>

                <View style={styles.txtContent}>
                    <Text style={styles.txtTitle}>MARIO KART 8 - DELUXE</Text>
                    <Text style={styles.txtDescription}>
                    Acelere nesta versão definitiva do jogo Mario Kart 8 e jogue a qualquer hora, em qualquer lugar! 
                    Participe de corridas com seus amigos ou compita com eles em um modo de batalha revisado, em pistas de 
                    batalha que estão de volta, ou pistas completamente novas. Jogue com a comunicação local sem fio em 
                    multijogador para até quatro jogadores em 1080p ao jogar no modo TV. Todas as pistas da versão para o Wii U, 
                    incluindo conteúdo extra, estão de volta. Além disso, Inklings aparecem como novos personagens convidados, 
                    junto com favoritos que estão de volta, como Rei Bu, Quebra-ossos e Bowser Jr.!
                    </Text>
                    <Text style={[styles.txtList, { marginTop: 5 }]}>- CATEGORIA: CORRIDA </Text>
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