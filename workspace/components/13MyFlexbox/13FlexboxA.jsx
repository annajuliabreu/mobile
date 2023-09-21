import {View, Text, StyleSheet} from 'react-native'

const MyFlexBoxA = () => {
    return(
        <View style={estilos.container}>
            <View style={estilos.view1}></View>
            <View style={estilos.view2}></View>
            <View style={estilos.view3}></View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#DAD7CD',
        flex: 1,
        height: 667,
        width: 375,
    },
    view1:{
        backgroundColor: '#A3B18A',
        flex: 1,
    },
    view2:{
        backgroundColor: '#588157',
        flex: 2,
    },
    view3:{
        backgroundColor: '#3A5A40',
        flex: 3,
    }
})

export default MyFlexBoxA;