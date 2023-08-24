import { View, Text } from 'react-native';

const MyCat = () => {
    // let catName = "Gegê";

    const getFullName = (primeiroNome, segundoNome) => {
        return primeiroNome + " " + segundoNome;
    }

    return(
        <View>
            <Text style={{fontSize:20}}>
                Oi! Eu sou o gato {getFullName("Gegê", "Lindo")} :)
            </Text>
        </View>
    )
}

export default MyCat;