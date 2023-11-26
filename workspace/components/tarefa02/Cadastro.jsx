import { View, Text, Button, TextInput } from 'react-native'
import Estilo from './Estilo'

const Cadastro = ({ route, navigation }) => {
    return (
        <View style={Estilo.container}>
            <Text style={Estilo.header}>Cadastro</Text>

            <TextInput
                style={Estilo.input}
                placeholder="Nome"
                onChangeText={dados => Cadastro.nome = dados}
            />
            <TextInput
                style={Estilo.input}
                placeholder="Idade"
                onChangeText={dados => Cadastro.idade = dados}
            />
            <TextInput
                style={Estilo.input}
                placeholder="E-mail"
                onChangeText={dados => Cadastro.email = dados}
            />

            <View style={Estilo.botao}>
                <Button
                    color='#D90368'
                    title="OK"
                    onPress={() => navigation.navigate("Perfil", Cadastro)}
                />
            </View>
        </View>
    )
}

export default Cadastro;