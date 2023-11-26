import { View, Text } from 'react-native'
import Estilizando from '../Estilizando';

const Questao01B = () => {
    let disciplinas = [
        "Projeto Integrado IV",
        "Mobile",
        "Marketing",
        "Sociologia e Antropologia",
    ];

    let disciplinasListagem = disciplinas.map(
        (disciplina) => {
            return (
                <View >
                    <Text style={Estilizando.texto}>{disciplina}</Text>
                </View>
            )
        }
    );

    return (
        <View>
            {disciplinasListagem}
        </View>
    )
}

export default Questao01B;