import { View, Text } from 'react-native'
import Estilizando from '../Estilizando';

const Questao01A = ({nome, sobrenome, curso}) => {
    return(
        <View>
            <Text style={Estilizando.texto}>Nome: {nome}</Text>
            <Text style={Estilizando.texto}>Sobrenome: {sobrenome}</Text>
            <Text style={Estilizando.texto}>Curso: {curso}</Text>
        </View>
    )
}

export default Questao01A;