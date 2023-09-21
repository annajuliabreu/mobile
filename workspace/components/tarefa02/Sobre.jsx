import { View, Text, Button, TextInput } from 'react-native'
import Estilo from './Estilo'

const Sobre = ({navigation}) =>{
    return(
        <View style={Estilo.container}>
            <Text style={Estilo.header}>Sobre</Text>
            <View style={Estilo.box}>
            <Text>Bem-vindo ao MyHealth - seu companheiro confiável para uma jornada de saúde mais consciente e equilibrada!</Text>
            <Text>O MyHealth é muito mais do que apenas um aplicativo de saúde; é a sua ferramenta abrangente para avaliar e 
                monitorar seu Índice de Massa Corporal (IMC), um dos indicadores mais importantes de sua saúde geral. 
                Projetado com sua saúde em mente, o MyHealth oferece uma maneira simples e eficaz de rastrear seu progresso, 
                definir metas alcançáveis e tomar medidas concretas para melhorar seu bem-estar.</Text>
            </View>
            <View style={Estilo.botao}> 
                <Button 
                    color= '#D90368'
                    title='Home'
                    onPress={ () => navigation.popToTop() } 
                />
            </View>
        </View>
    )
}

export default Sobre;