import { View, Text } from 'react-native';

const MyCatting = () => {
    // let catName = "Gegê";

    const getFullName = (primeiroNome:string, segundoNome:string) => {
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

export default MyCatting;