import { Text, View, Button } from 'react-native'
import Estilo from './Estilo'

const Home = ({ navigation }) => {
    return (
        <View style={Estilo.container}>
            <Text style={Estilo.header}>ATV0.3 - MyHealth</Text>

            <View style={Estilo.botao}>
                <Button 
                    style={Estilo.botao}
                    color= '#D90368'
                    title="Cadastro"
                    onPress={() => navigation.navigate("Cadastro")}
                />
            </View>
            
            <View style={Estilo.botao}>
                <Button 
                    color= '#D90368'
                    title="IMC"
                    onPress={() => navigation.navigate("IMC")}
                />
            </View>
            
            <View style={Estilo.botao}>
                <Button 
                    color= '#D90368'
                    title="Sobre"
                    onPress={() => navigation.navigate('Sobre')}
                />
            </View>
        </View>
    )
}

export default Home;