import { StyleSheet } from 'react-native'

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        height:'667px',
        width:'375px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#DBF9F0',
    },
    header:{
        fontSize: '25px',
        color: '#D90368',
        fontWeight: 'bold',
        padding: '20px',
    },
    botao:{
        height: '40px',
        width: '300px',
        paddingBottom: '4px',
    },
    input:{
        height: 48,
        width: 300,
        borderColor: 'gray',
        fontSize: 22,
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 10, 
        marginBottom: 10,
        color: '#00100B'
    },
    box:{
        padding:'20px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto:{
        fontWeight: "bold",
        fontSize: 20,
    }

})

export default Estilo;