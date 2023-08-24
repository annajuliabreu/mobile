import { Text, View } from 'react-native';

// anotações:
// a tag <View> é como se fosse a <div>
// a tag <Text> é como se fosse as tags de texto, p, h1, h2...
// as tags aqui começam com a letra maíuscula, diferente do que vemos em web
// precisamos importar todas essas tags!!
// nome do componente sempre em maíusculo, variável pode ser em minúsculo

const HelloRN = () => {
    return (
        <View>
            <Text style={{fontSize:15, fontWeight: 'bold'}}> 
                I was made for Heaven
                I was made for Jesus
                I was made to walk in the cool of the day with You
                With You
            </Text>
        </View>
    )
}

export default HelloRN;