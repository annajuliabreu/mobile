import { View, Text } from 'react-native'
import ChildA from './05ChildA'
import ChildB from './05ChildB';


const Parent = () => {
    return(
        <View>
            <Text style={{fontSize:25, fontWeight: 'bold', marginBottom: 16}}>John Mark Pantana presents:</Text>
            <ChildA />
            <Text style={{marginTop:10, marginBottom:8}}>Quiz time!</Text>
            <ChildB question="What song is this?" />
            <ChildB question="Who wrote this song?" />
            <ChildB question="What is this song about?" />
        </View>
    )
}

export default Parent;