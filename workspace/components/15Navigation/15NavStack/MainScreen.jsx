import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Screen01 from './Screen01';
import Screen02 from './Screen02';
import Screen03 from './Screen03';

const Stack = createNativeStackNavigator();

const MainScreen = ({ navigator }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Screen01'>
                <Stack.Screen name="Screen01" component={Screen01} options={{ title: "Tela01" }} />
                <Stack.Screen name="Screen02" component={Screen02} options={{ title: "Tela02" }} />
                <Stack.Screen name="Screen03" component={Screen03} options={{title: 'Tela03'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainScreen;