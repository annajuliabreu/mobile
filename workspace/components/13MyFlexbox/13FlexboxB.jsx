import {View, Text, StyleSheet} from 'react-native'

const MyFlexBoxB = () => {
    return(
        <View style={estilos.container}>
            <View style={estilos.view1}></View>
            <View style={estilos.view2}></View>
            <View style={estilos.view3}></View>
            <View style={estilos.view4}></View>
            <View style={estilos.view5}></View>
            <View 
                style={{
                    backgroundColor:"white",
                    width:200,
                    height:200,
                }}
            >
                
            </View>""

        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#DAD7CD',
        marginTop: 25,
        marginBottom: 25,
        height: 667,
        width: 375,

        flex: 1,
        flexDirection: 'column',
        justifyContent : 'flex-start',
        alignItems : 'flex-start',
        alignWrap : 'wrap',
        alignContent: 'flex-end',
    },
    view1:{
        backgroundColor: '#3b422e',
        height: 100,
        width: 100,
    },
    view2:{
        backgroundColor: '#588157',
        height: 100,
        width: 100,
    },
    view3:{
        backgroundColor: '#3A5A40',
        height: 100,
        width: 100,
        // alignSelf: 'center',
    },
    view4:{
        backgroundColor: '#344E41',
        height: 100,
        width: 100,
    },
    view5:{
        backgroundColor: '#25382f',
        height: 100,
        width: 100,
    }
})

export default MyFlexBoxB;

// https://reactnative.dev/docs/flexbox