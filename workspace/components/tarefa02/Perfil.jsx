import { View, Text, Button, TextInput } from 'react-native'
import Estilo from './Estilo'

const Perfil = ({ route, navigation }) => {
    const { nome, idade, email } = route.params
    return (
        <View style={Estilo.container} >
            <Text style={Estilo.header}>Perfil</Text>
            
            <Image
                source={{
                    uri: 'https://i.pinimg.com/564x/d7/3c/30/d73c304b9fc83280445db91eadbee1e3.jpg',
                }}
            />

            <Text style={Estilo.texto}>{nome}</Text>
            <Text style={Estilo.texto}>{idade}</Text>
            <Text style={Estilo.texto}>{email}</Text>

            <View style={Estilo.botao}>
                <Button
                    title='Home'
                    onPress={() => navigation.popToTop()}
                />
            </View>

        </View>
    )
}

export default Perfil;