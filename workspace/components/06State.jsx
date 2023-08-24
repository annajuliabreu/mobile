import { View, Text, Button} from 'react-native'
import { useState } from 'react';

const State = () =>{
    // let contador = 0;
    const [contador, setContador] = useState(0);
    return(
        <View>
            <Text style={{fontSize:20, fontWeight: 'bold'}}>Contador: {contador}</Text>
            <Button 
                title="contar + 1"
                onPress={
                    () => {
                        // contador = contador + 1;
                        setContador(contador+1);
                        // quando eu quero somar sempre 3, por exemplo: utilizo uma função anônima, prev (previsous)
                        // setContador(prev => prev + 1);
                        // setContador(prev => prev + 1);
                        // setContador(prev => prev + 1);
                    }
                }
            />
        </View>
    )
}

export default State;