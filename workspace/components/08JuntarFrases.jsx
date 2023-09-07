import { View, Text, TextInput, StyleSheet, Button } from "react-native"
import { useState } from "react"

const JuntarFrases= () =>{
    // const [nome, setNome] = useState('');
    // const [sobrenome, setSobrenome] = useState('');
    // const [nomeCompleto, setNomeCompleto] = useState({setNome} + {setSobrenome});

    // const handleSubmeter = () => {
    //     const nomeCompletoConcatenado = `${nome} ${sobrenome}`;
    //     setNomeCompleto(nomeCompletoConcatenado);
    // };

    const [frase1,setFrase1] = useState("")
    const [frase2,setFrase2] = useState("")
    const [frase3,setFrase3] = useState("")

    return(
        <View style={estilos.view}>
            <Text style={estilos.header}>Juntador de Frases</Text>
            <TextInput
                style={estilos.input}
                placeholder="Nome"
                defaultValue={frase1}
                onChangeText={
                    (textoDigitado) => setFrase1(textoDigitado)
                }
            />
            <TextInput
                style={estilos.input}
                placeholder="Sobrenome"
                defaultValue={frase2}
                onChangeText={
                    (textoDigitado) => setFrase2(textoDigitado)
                }
            />
            
            <View style={{width:300, height:100, fontSize:40, padding:30, margin: 20}}>
                <Button
                    title="JUNTAR"
                    onPress={
                        ()=> {
                            console.log(frase1 + " " + frase2)
                            setFrase3(frase1 + "  " + frase2)
                        }
                    }
                />
            </View>

            <Text style={estilos.frase}>
                {frase3}
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
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F9E9'
    },
    botao:{
        backgroundColor: '#D81159'
    },
    input:{
        height: 48,
        borderColor: 'gray',
        fontSize: 22,
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 10, 
        marginBottom: 10,
        color: '#00100B'
    }
})

export default JuntarFrases;