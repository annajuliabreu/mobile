import { View, Text, Button, TextInput } from 'react-native'
import Estilo from './Estilo'

const Cadastro = ({ route, navigation }) => {
    const cadastro = { nome: "", idade: "", email: "" }

    return (
        <View style={Estilo.container}>
            <Text style={Estilo.header}>Cadastro</Text>

            <TextInput
                style={Estilo.input}
                placeholder="Nome"
                onChangeText={dados => cadastro.nome = dados}
            />
            <TextInput
                style={Estilo.input}
                placeholder="Idade"
                onChangeText={dados => cadastro.idade = dados}
            />
            <TextInput
                style={Estilo.input}
                placeholder="E-mail"
                onChangeText={dados => cadastro.email = dados}
            />

            <View style={Estilo.botao}>
                <Button
                    color='#D90368'
                    title="OK"
                    onPress={() => navigation.navigate("Perfil", cadastro)}
                />
            </View>
        </View>
    )
}

export default Cadastro;