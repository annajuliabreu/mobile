import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './Home';
import IMC from './IMC';
import Cadastro from './Cadastro';
import Sobre from './Sobre';
import Perfil from './Perfil';
import Resultado from './Resultado';

const Stack = createNativeStackNavigator();

const Main = ({ navigator }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="IMC" component={IMC} />
                <Stack.Screen name="Sobre" component={Sobre} />
                <Stack.Screen name="Perfil" component={Perfil} />
                <Stack.Screen name="Resultado" component={Resultado} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main;