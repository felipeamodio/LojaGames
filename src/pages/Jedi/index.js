import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ConsolesButton from '../../components/ConsolesButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';


export default function Details({ navigation }){
//mudando o titulo da página
    navigation.setOptions({
        headerTitle: 'STAR WARS JEDI: FALLEN ORDER'
    })

    return(
        <ScrollView style={styles.container}>
            <Image 
              source={require('../../imgs/jedi.png')}
              style={styles.img}
              resizeMode= "cover"
            />

            <View>
                <View>
                    <Text style={styles.price}>R$159,99</Text>
                </View>

                <View opacity={0.5}>
                    <Text style={styles.title}>STAR WARS JEDI: FALLEN ORDER</Text>
                </View>


                <View style={{flexDirection: 'row', width: '100%'}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <ConsolesButton bgColor="#17181A" color="#FFFFFF">PS4</ConsolesButton>
                        <ConsolesButton>X-BOX ONE</ConsolesButton>
                        <ConsolesButton>SWITCH</ConsolesButton>
                        <ConsolesButton>PS5</ConsolesButton>
                    </ScrollView>
                </View>

                <View style={styles.txtContent}>
                    <Text style={styles.txtTitle}>STAR WARS JEDI: FALLEN ORDER</Text>
                    <Text style={styles.txtDescription}>
                    O jogo é ambientado no universo Star Wars, cinco anos após o Episódio III – A Vingança dos Sith, 
                    e conta a história de Cal Kestis, um jovem Padawan que está sendo perseguido pelo Império Galático 
                    enquanto tenta completar o seu treinamento e restaurar a Ordem Jedi.
                    </Text>
                    <Text style={[styles.txtList, { marginTop: 5 }]}>- CATEGORIA: AVENTURA </Text>
                    <Text style={styles.txtList}>- EMPRESA: RESPAWN ENTERTAINMENT </Text>
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
        height: 380
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