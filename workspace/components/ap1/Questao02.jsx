import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import Estilizando from './Estilizando';

const Questao02 = () => {
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
        <View style={Estilizando.container}>
            <View style={Estilizando.inputContainer}>
                <TextInput
                    style={Estilizando.input}
                    onChangeText={(numero) => setNumber1(numero)}
                    keyboardType="numeric"
                    placeholder='Número 1'
                />
                <TextInput
                    style={Estilizando.input}
                    onChangeText={(numero) => setNumber2(numero)}
                    keyboardType="numeric"
                    placeholder='Número 2'
                />
            </View>

            <View style={Estilizando.botoesContainer}>
                <Button title='+' onPress={somar} color='#ea50a1' />
                <Button title='-' onPress={subtrair} color='#ea50a1' />
                <Button title='*' onPress={multiplicar} color='#ea50a1' />
                <Button title='/' onPress={dividir} color='#ea50a1' />
            </View>

            <Text style={Estilizando.header}>
                Resultado: {result}
            </Text>
        </View>
    )
}

export default Questao02;