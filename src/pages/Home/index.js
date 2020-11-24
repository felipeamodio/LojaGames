import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    Image, 
    TouchableOpacity 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Games from '../../components/Games';
import { useNavigation } from '@react-navigation/native';


export default function Home(){
  const navigation = useNavigation();


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require('../../imgs/wallppaper.png')}
                    style={styles.wallppaper}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.txt}>JOGOS</Text>
                    <Text style={[styles.txt], 
                        {color: '#CECECF', 
                        fontSize: 26, 
                        marginHorizontal: '1%', 
                        fontFamily: 'Karla_700Bold' }}>•</Text>

                    <Text style={[styles.txt], 
                        {color: '#CECECF', 
                        fontSize: 26, 
                        marginHorizontal: '1%',
                        fontFamily: 'Karla_700Bold' }}>LANÇAMENTOS</Text>

                    <TouchableOpacity style={{position: "absolute", right: 0, alignSelf: 'center'}}>
                        <MaterialIcons 
                            name="filter-list"
                            size={24}
                            color="#000000"
                        />
                    </TouchableOpacity>
                </View>
            </View>
          <View style={styles.line}/>

          <ScrollView>
              <Text style={styles.txtLancamentos}>LANÇAMENTOS</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>
              <Games img={require('../../imgs/fifa21.jpg')} cost="R$199,99" onClick={() => navigation.navigate('Details')}>
                    FIFA 21
                </Games>

                <Games img={require('../../imgs/crash4.jpg')} cost="R$130,00" onClick={() => navigation.navigate('Crash')}>
                    CRASH 4
                </Games>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Games img={require('../../imgs/spidermanps5.png')} cost="R$250,00" onClick={() => navigation.navigate('Spider')}>
                    Spider-Man Miles Moralles
                </Games>

                <Games img={require('../../imgs/valhalla.png')} cost="R$189,99" onClick={() => navigation.navigate('Assassins')}>
                    Assassin's Creed Valhalla
                </Games>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Games img={require('../../imgs/thelastofus2.png')} cost="R$200,00" onClick={() => navigation.navigate('Ellie')}>
                    The Last of Us - Part II
                </Games>

                <Games img={require('../../imgs/pokemon.jpg')} cost="R$129,99" onClick={() => navigation.navigate('Pokemon')}> 
                    Pokemon - Let's Go Pikachu
                </Games>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Games img={require('../../imgs/mariokart.jpg')} cost="R$360,00" onClick={() => navigation.navigate('Mario')}>
                    Mario Kart 8 - Deluxe
                </Games>

                <Games img={require('../../imgs/jedi.png')} cost="R$159,99" onClick={() => navigation.navigate('Jedi')}> 
                    Star Wars Jedi: Fallen Order
                </Games>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Games img={require('../../imgs/death.png')} cost="R$60,00" onClick={() => navigation.navigate('Death')}>
                    Death Stranding
                </Games>

                <Games img={require('../../imgs/avengers.png')} cost="R$199,99" onClick={() => navigation.navigate('Avengers')}> 
                    Marvel's Avengers
                </Games>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Games img={require('../../imgs/dragonball.png')} cost="R$159,99" onClick={() => navigation.navigate('Dragonball')}>
                    Dragon Ball Z - KAKAROT
                </Games>

                <Games img={require('../../imgs/ghost.png')} cost="R$215,00" onClick={() => navigation.navigate('Ghost')}> 
                    Ghost of Tsushima
                </Games>
              </View>
              
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    header: {
        marginBottom: 8
    },
    wallppaper: {
        width: '100%',
        height: 120,
    },
    textContainer: {
        flexDirection: "row",
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    txt: {
        fontFamily: 'Karla_700Bold',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#191970',
        borderBottomWidth: 1.5
    },
    txtLancamentos: {
        fontFamily: 'Karla_700Bold',
        fontSize: 26,
        marginHorizontal: '1%',
        marginTop: 5,
        textAlign: 'center'
    }
});