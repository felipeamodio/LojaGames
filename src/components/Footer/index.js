import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Games from '../Games';


export default function Footer(){
    return(
        <View>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10}}>
                        <Games img={require('../../imgs/godofwar.jpg')} cost="R$65,90">
                            GOD OF WAR 4
                        </Games>
                    </View>

                    <View style={{ marginHorizontal: 10}}>
                        <Games img={require('../../imgs/megaman.png')} cost="R$135,99">
                            MEGAMAN 11
                        </Games>
                    </View>

                    <View style={{ marginHorizontal: 10}}>
                        <Games img={require('../../imgs/ufc.png')} cost="R$185,99">
                            UFC 4
                        </Games>
                    </View>

                    <View style={{ marginHorizontal: 10}}>
                        <Games img={require('../../imgs/zelda.jpg')} cost="R$220,00">
                            ZELDA
                        </Games>
                    </View>

                    <View style={{ marginHorizontal: 10}}>
                        <Games img={require('../../imgs/cyberpunk2077.png')} cost="R$250,00">
                            CYBERPUNK 2077
                        </Games>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Karla_700Bold',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})