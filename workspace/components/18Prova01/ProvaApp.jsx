import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProvaTela01 from "./ProvaTela01";
import ProvaTela02 from "./ProvaTela02";

const NativeStack = createNativeStackNavigator();

const ProvaApp = () => {
    return (
        <NavigationContainer>
            <NativeStack.Navigator>

                    {/* grupos das telas principais*/}
                    <NativeStack.Group screenOptions={{ headerShown: false }}>
                        <NativeStack.Screen name="ProvaTela01" component={ProvaTela01} />
                    </NativeStack.Group>

                    {/* grupos das telas modais */}
                    <NativeStack.Group screenOptions={{ presentation: "modal" }}>
                        <NativeStack.Screen name="ProvaTela02" component={ProvaTela02} />
                    </NativeStack.Group>

            </NativeStack.Navigator>
        </NavigationContainer >
    )
}

export default ProvaApp;