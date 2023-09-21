import { View, Text, Button, TextInput } from 'react-native'
import Estilo from './Estilo'

const Resultado = ({navigation}) =>{
    return(
        <View style={Estilo.container}>
            <Text>Resultado</Text>
            
            <View style={Estilo.botao}> 
                <Button 
                    title='Home'
                    onPress={ () => navigation.popToTop() } 
                />
            </View>
        </View>
    )
}

export default Resultado;