import { View, Text, TextInput, Button, Pressable } from 'react-native';
import estilos from './09CSS';
import { useState } from 'react';
import MyPressable from './09MyPressable';

const Calculadora = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');

    function somar() {
        setResult(parseInt(number1) + parseInt(number2))
    }

    function subtrair() {
        setResult(parseInt(number1) - parseInt(number2))
    }

    function multiplicar() {
        setResult(parseInt(number1) * parseInt(number2))
    }

    function dividir() {
        setResult(parseInt(number1) / parseInt(number2).toFixed(2))
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.header}>Calculadora 0.1</Text>
            <TextInput
                style={estilos.input}
                onChangeText={(numero) => setNumber1(numero)}
                keyboardType="numeric"
            />
            <TextInput
                style={estilos.input}
                onChangeText={(numero) => setNumber2(numero)}
                keyboardType="numeric"
            />

            <View style={estilos.botoes}>
                <Button title='somar+' onPress={somar} color='#E06C9F' />
                <Button title='subtr-' onPress={subtrair} color="#E06C9F" />
                <Button title='multi×' onPress={multiplicar} color="#E06C9F" />
                <Button title='divid÷' onPress={dividir} color="#E06C9F" />
            </View>

            <MyPressable funcao={somar} titulo="sooomar" />

            {/* <Pressable
                onPress={somar}
                style={
                    ({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#E06C9F' : '#d43d7e',
                            padding: 4,
                        }
                    ]
                }
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>somaaar</Text>
            </Pressable> */}

            <Text style={estilos.header}>
                Resultado: {result}
            </Text>
        </View>
    )
}

export default Calculadora;