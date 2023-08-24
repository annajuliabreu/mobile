import { View, Text, TextInput, Image} from 'react-native'

const ChildA = () => {
    return(
        <View style={{flexDirection:'column', alignItems: 'center'}}>
            <Image 
                source={{uri:'https://i.ytimg.com/vi/8ImHLSM7yfE/maxresdefault.jpg'}}
                style={{height:180,width:320}}
            />
        </View>
    )
}

export default ChildA;
