import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import ConsolesButton from '../../components/ConsolesButton';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import * as Animatable from 'react-native-animatable';

const AnimatedAll = Animatable.createAnimatableComponent(ScrollView)


export default function Details({ navigation }){
//mudando o titulo da página
    navigation.setOptions({
        headerTitle: 'MARVELS AVENGERS'
    })

    return(
        <AnimatedAll style={styles.container}
                     animation="bounceInUp"
                     duration={2000}>
            <Image 
              source={require('../../imgs/avengers.png')}
              style={styles.img}
              resizeMode= "cover"
            />

            <View>
                <View>
                    <Text style={styles.price}>R$199,99</Text>
                </View>

                <View opacity={0.5}>
                    <Text style={styles.title}>MARVEL'S AVENGERS</Text>
                </View>


                <View style={{flexDirection: 'row', width: '100%'}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <ConsolesButton bgColor="#17181A" color="#FFFFFF">PS5</ConsolesButton>
                        <ConsolesButton>X-BOX ONE</ConsolesButton>
                        <ConsolesButton>SWITCH</ConsolesButton>
                        <ConsolesButton>PS4</ConsolesButton>
                    </ScrollView>
                </View>

                <View style={styles.txtContent}>
                    <Text style={styles.txtTitle}>MARVEL'S AVENGERS</Text>
                    <Text style={styles.txtDescription}>
                    A história inicia-se no A-Day, onde os Vingadores estão inaugurando uma nova base em São Francisco — incluindo
                    a revelação de seu próprio aeroporta-aviões alimentado por uma fonte de energia experimental. A celebração se torna
                    mortal quando um acidente catastrófico resulta na devastação maciça da cidade e mata o Capitão América. 
                    Culpados pela tragédia, os Vingadores se separam. Cinco anos depois, com todos os super-heróis banidos e o mundo 
                    em perigo, a única esperança é reunir os Heróis Mais Poderosos da Terra.
                    </Text>
                    <Text style={[styles.txtList, { marginTop: 5 }]}>- CATEGORIA: RPG </Text>
                    <Text style={styles.txtList}>- EMPRESA: CRYSTAL DYNAMICS </Text>
                </View>

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