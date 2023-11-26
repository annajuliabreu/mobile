import { useState } from "react"
import { View, Text, Image, TextInput, TouchableOpacity, } from 'react-native';
import loginStyle from './loginStyle';

const LoginMCU = () => {

    // Estados para armazenar o e-mail e a senha inseridos pelo usuário
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Função para lidar com o clique no botão de login
    const handleLogin = () => {
        // Lógica de autenticação, fazer uma chamada a uma API
        console.log('Email:', email);
        console.log('Senha:', password);
        // Lógica de autenticação aqui
    };

    return (
        <View style={loginStyle.container}>
            <View style={loginStyle.image}>
                <Image
                    style={loginStyle.tinyLogo}
                    source={{
                        uri: 'https://github.com/annajuliabreu/mobile/blob/main/workspace/components/MeuCalendarioUniversitario/assets/Camada_1-2-2.png?raw=true',
                    }}
                />
            </View>

            <View>
                
                <Text style={loginStyle.title}>Login</Text>

                {/* Campo de entrada para o e-mail */}
                <TextInput
                    style={loginStyle.input}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                {/* Campo de entrada para a senha */}
                <TextInput
                    style={loginStyle.input}
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                {/* Botão de login */}
                <TouchableOpacity style={loginStyle.button} onPress={handleLogin}>
                    <Text style={loginStyle.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginMCU;