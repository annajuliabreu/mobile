import { View, Text } from "react-native";
import estilos from "./estilos";


const ProvaTela02 = ({route, navigation}) => {
    const { icone, nome, valor, hora, secao } = route.params;
    return(
        <View style={{ backgroundColor: "black", height:"100%"}}>
            <Text style={estilos.header}>{icone}</Text>
            <Text style={estilos.header}>{secao}</Text>
            <Text style={estilos.header}>{valor}</Text>
            <Text style={estilos.header}>{nome}</Text>
            <Text style={estilos.header}>{hora}</Text>
        </View>
    )
}

export default ProvaTela02;