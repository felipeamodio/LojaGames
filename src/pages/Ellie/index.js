import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ConsolesButton from '../../components/ConsolesButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';


export default function Details({ navigation }){
//mudando o titulo da página
    navigation.setOptions({
        headerTitle: 'THE LAST OF US PART II'
    })

    return(
        <ScrollView style={styles.container}>
            <Image 
              source={require('../../imgs/thelastofus2.png')}
              style={styles.img}
              resizeMode= "cover"
            />

            <View>
                <View>
                    <Text style={styles.price}>R$200,00</Text>
                </View>

                <View opacity={0.5}>
                    <Text style={styles.title}>THE LAST OF US PART II</Text>
                </View>


                <View style={{flexDirection: 'row', width: '100%'}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <ConsolesButton bgColor="#17181A" color="#FFFFFF">PS4</ConsolesButton>
                        <ConsolesButton>PS5</ConsolesButton>
                    </ScrollView>
                </View>

                <View style={styles.txtContent}>
                    <Text style={styles.txtTitle}>THE LAST OF US PART II</Text>
                    <Text style={styles.txtDescription}>
                    Cinco anos depois da jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel se estabelecem 
                    em Jackson, Wyoming. ... Quando um evento violento interrompe essa paz, Ellie embarca em uma jornada 
                    implacável para fazer justiça e encontrar uma solução.
                    </Text>
                    <Text style={[styles.txtList, { marginTop: 5 }]}>- CATEGORIA: AÇÃO-AVENTURA </Text>
                    <Text style={styles.txtList}>- EMPRESA: NAUGHTY DOG </Text>
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
        height: 390
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