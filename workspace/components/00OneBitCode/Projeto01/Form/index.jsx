import { React, useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity
 } from 'react-native';
import ResultImc from './ResultImc';
import Styling from '../Styling';


const Form = () => {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha os campos com o peso e a altura!");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

    const imcCalculator = () => {
        return setImc((weight / (height * height)).toFixed(2))
    }

    const verificationImc = () => {
        if(imc === null){
            setErrorMessage("O campo é obrigatório")
        }
    }

    const validationImc = () => { 
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual a ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha os campos com o peso e a altura!")
    }

    return (
        <View style={Styling.formContext}>
            <View style={Styling.form}>
                <Text style={Styling.formLabel}>Informe sua altura (metro)</Text>
                <TextInput
                    style={Styling.formInput}
                    onChangeText={setHeight}
                    value={height}
                    // placeholder='Ex. 1.98'
                    keyboardType='numeric'

                />
                <Text style={Styling.formErrorMessage}>{errorMessage}</Text>

                <Text style={Styling.formLabel}>Informe seu peso (kg)</Text>
                <TextInput
                    style={Styling.formInput}
                    onChangeText={setWeight}
                    value={weight}
                    // placeholder='Ex. 95'
                    keyboardType='numeric'
                />
                <Text style={Styling.formErrorMessage}>{errorMessage}</Text>

                {/* <Button
                    onPress={() => validationImc()}
                    title={textButton}
                    color="#04395E"
                    accessibilityLabel='Calcular o IMC'
                /> */}

                <TouchableOpacity
                    style={Styling.formButtonCalculator}
                    onPress={() => validationImc()}
                >
                    <Text style={Styling.formTextButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    )
}

    export default Form;