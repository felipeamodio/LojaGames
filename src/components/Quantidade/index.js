import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default props => {
    const [numero, setNumero] = useState(props.inicial)

    const plus = () => setNumero(numero + 1)
    const min = () => setNumero(numero - 1)

    return(
        <>

    <View>
        <Text style={styles.txtTitle}>Quantidade</Text>
            <View style={styles.qtd}>  
                <TouchableOpacity onPress={min}>
                <AntDesign name="minuscircle" size={24} color="black" />
                </TouchableOpacity>

                 <Text style={styles.qtdText}>{numero}</Text>

                <TouchableOpacity onPress={plus}>    
                <AntDesign name="pluscircle" size={24} color="black" />
                </TouchableOpacity>
              </View>
    </View>
        </>
    )
}

const styles = StyleSheet.create({
    qtd: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: '2%',
        marginTop: 40
    },
    qtdText: {
        fontSize: 20,
        fontFamily: 'Karla_400Regular'
    },
    txtTitle: {
        fontFamily: 'Karla_400Regular',
        fontSize: 20,
        textAlign: "center"
    }
})

