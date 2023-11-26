import { StyleSheet } from 'react-native';

const loginStyle = StyleSheet.create({
    image:{
        paddingBottom: 16,
    },
    tinyLogo: {
        width: 265,
        height: 52,
    },
    header:{
        fontSize: 30,
        fontweight: 'bold',
        paddingBottom: 20,
        color: '#D81159',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#F0FEFF',
      },
      title: {
        fontSize: 24,
        marginBottom: 16,
      },
      input: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 8,
      },
      button: {
        backgroundColor: '#42946D',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
})

export default loginStyle;