import { View, Text, Button } from 'react-native'
import myStyle from './MyStyle';


const Screen03 = ({navigation}) => {
    return(
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Screen03</Text>
            <Button 
                title='Abrir Modal Fancy'
                onPress={ () => setModalVisible(true) } 
            />
            <Button 
                title='Voltar para Screen01'
                onPress={ () => navigation.popToTop() } 
            />
        </View>
    )
}

export default Screen03;