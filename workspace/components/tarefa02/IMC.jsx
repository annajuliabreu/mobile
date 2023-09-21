import { View, Text, Button, TextInput } from 'react-native'
import Estilo from './Estilo'

const IMC = () =>{
    return(
        <View style={Estilo.container}>
            <Text style={Estilo.header}>IMC</Text>

            <TextInput
                style={Estilo.input}
                placeholder="Peso"
            />
            <TextInput
                style={Estilo.input}
                placeholder="Altura"
            />

            <View style={Estilo.botao}> 
                <Button
                    color= '#D90368'
                    title="OK"
                />
            </View>
        </View>
    )
}

export default IMC;