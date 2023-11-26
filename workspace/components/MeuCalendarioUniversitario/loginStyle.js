import { StyleSheet } from 'react-native';

const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F283B6',
        height: 667,
        width: 375,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,
    },
    input: {
        height: 40,
        width: 290,
        borderColor: 'white',
        borderRadius: 4,
        borderWidth: 2,
        paddingLeft: 10,
        fontSize: 20,
        margin: 4,
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // backgroundColor: 'red',
        marginTop: 5,
        width: 300,
    }
})

export default loginStyle;