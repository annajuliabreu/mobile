import { View, Text, TextInput, StyleSheet, Button } from "react-native"
import { useState } from "react"

const MyTextInput = () =>{
    const [frase, setFrase] = useState('');

    return(
        <View style={estilos.view}>
            <Text style={estilos.header}>Emoji Translator</Text>
            <TextInput
                style={estilos.input}
                placeholder="Type here to translate!"
                defaultValue={frase}
                onChangeText={
                    (fraseDigitada) => {
                        setFrase(fraseDigitada)
                    }
                }
            />
            <Text style={estilos.frase}>
                {
                    frase
                    .split(" ")
                    .map(
                        (palavra) => palavra && '🍔'
                    )
                    .join(" ")
                }
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    header:{
        fontSize: 30,
        fontweight: 'bold',
        paddingBottom: 20,
        color: '#D81159',
        fontWeight: 'bold',
    },
    frase:{
        fontSize: 20,
        fontweight: 'bold',
        paddingTop: 20,
        color: '#D81159',
        fontWeight: 'bold',
    },
    view:{
        height: 500,
        // flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        // padding: 200,
        backgroundColor: '#F5F9E9'
    },
    input:{
        height: 48,
        width: 350,
        borderColor: 'gray',
        fontSize: 22,
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 10, 
        marginBottom: 10,
        color: '#00100B'
    }
})

export default MyTextInput;