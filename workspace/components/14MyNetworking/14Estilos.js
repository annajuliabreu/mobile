import {StyleSheet} from 'react-native'

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#63768D',
        height:667,
        width:375,
    },
    header:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    description:{
        fontSize: 16,
        fontWeight: 'light',
        color: 'white',
    },
    box:{
        flex:1,
        flexDirection: 'row',
        padding: 8,
        backgroundColor:'white'
    },
    id:{
        // backgroundColor:'yellow',
        padding:16,
        fontSize: 24,
        fontweight: 'bold',
    },
    info:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})

export default estilos;