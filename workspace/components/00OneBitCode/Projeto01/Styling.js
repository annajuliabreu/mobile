import { StyleSheet } from 'react-native'

const Styling = StyleSheet.create({
    container:{
        flex: 1,
        // height:'667px',
        // width:'375px',
        height: "auto",
        width: "auto",
        paddingTop: 50,
        backgroundColor:'#058C42',

    },
    header:{
        fontSize: '24px',
        color: '#ffffff',
        fontWeight: 'bold',
        padding: '20px',
    },
    botao:{
        height: '40px',
        width: '300px',
        paddingBottom: '4px',
        // backgroundColor: '#DBF92F',
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
        fontSize: 14,
        paddingLeft: 0,
        paddingTop: 8,
        // color: "#f44336"
    },
    boxTitle:{
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
    },
    textTitle:{
        fontSize: '24px',
        // color: '#04A777',
        // color: '#297045',
        color: "white",
        fontWeight: 'bold',
        padding: 12,
    },
    formContext:{
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "white",
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop:30,
    },
    form:{
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel:{
        color: 'black',
        fontSize: '18px',
        paddingLeft: 12,
    },
    formInput:{
        width: "90%",
        borderRadius: 8,
        backgroundColor: "#f6f6f6",
        margin: 8,
        // marginBottom: 4,
        height: 40,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor:"gray",
        alignItems: 'center',
        justifyContent: 'center',
    },
    formButtonCalculator:{
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        backgroundColor:"#058C42",
        // backgroundColor: "white",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 12,
        marginTop: 30,
    },
    formTextButtonCalculator:{
        fontSize: 20,
        color: 'white',
    },
    resultImc:{
        flex: 1,
        // backgroundColor: "#058C42",
        paddingTop: 40,
        alignItems: 'center',
        width: "90%",
        textAlign: 'center',
    },
    numberImc:{
        fontSize: 48,
        color: "black",
        fontWeight: "bold",
    },
    information:{
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
    },
    formErrorMessage:{
        fontSize:12,
        color:"#f44336",
        paddingLeft:12,
        paddingTop: 0,
        marginBottom: 10,
    }
})

export default Styling;