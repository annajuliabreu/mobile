import { React, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ResultImc from './ResultImc';

const Form = () => {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    const imcCalculator = () => {
        return setImc((weight / (height * height)).toFixed(2))
    }

    const validationImc = () => { 
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual a ")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preecha o peso e a altura")
    }

    return (
        <View>
            <View>
                <Text>Informe sua altura (metro)</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Ex. 1.98'
                    keyboardType='numeric'

                />

                <Text>Informe seu peso (kg)</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Ex. 95'
                    keyboardType='numeric'
                />

                <Button
                    onPress={() => validationImc()}
                    title={textButton}
                    color="#04A777"
                    accessibilityLabel='Calcular o IMC'
                />
                <ResultImc messageResultImc={messageImc} resultImc={imc} />
            </View>
        </View>
    )
}

    export default Form;