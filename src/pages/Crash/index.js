import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ConsolesButton from '../../components/ConsolesButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Quantidade from '../../components/Quantidade';
import * as Animatable from 'react-native-animatable';

const AnimatedAll = Animatable.createAnimatableComponent(ScrollView)


export default function Details({ navigation }){
//mudando o titulo da página
    navigation.setOptions({
        headerTitle: 'CRASH 4'
    })

    return(
        <AnimatedAll style={styles.container}
                     animation="bounceInUp"
                     duration={2000}>
            <Image 
              source={require('../../imgs/crash4.jpg')}
              style={styles.img}
              resizeMode= "cover"
            />

            <View>
                <View>
                    <Text style={styles.price}>R$130,00</Text>
                </View>

                <View opacity={0.5}>
                    <Text style={styles.title}>CRASH 4</Text>
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
                    <Text style={styles.txtTitle}>CRASH 4</Text>
                    <Text style={styles.txtDescription}>
                    Embarque em uma aventura atemporal com seus marsupiais favoritos. Neo Cortex e N. Tropy estão aprontando 
                    mais uma e planejando atacar não apenas o nosso universo, mas todo o multiverso! Crash e Coco estão dispostos
                     a salvar o dia reunindo as quatro máscaras quânticas e distorcendo as leis da realidade.
                    </Text>
                    <Text style={[styles.txtList, { marginTop: 5 }]}>- CATEGORIA: AVENTURA </Text>
                    <Text style={styles.txtList}>- EMPRESA: TOYS FOR BOB </Text>
                </View>

                <Quantidade inicial={0}/>

                <Button />

                <View style={styles.line}/>

                <Footer />
            </View>

        </AnimatedAll>
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