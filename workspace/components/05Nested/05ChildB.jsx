import { View, Text, TextInput} from 'react-native'

const ChildB = ({question}) => {
    return(
        <View>
            <TextInput
                style={{height:40, color: 'grey', borderColor:'grey', borderWidth:1, borderRadius:4, paddingLeft:10, paddingRight:10, marginTop:4, marginBottom:10}}
                defaultValue={question}
            />
        </View>
    )
}

export default ChildB;
