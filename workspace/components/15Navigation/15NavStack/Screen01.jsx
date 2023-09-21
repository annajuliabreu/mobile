import { View, Text, Button } from 'react-native'
import myStyle from './MyStyle';
import { useState } from "react"
// import MyFancyModal from './MyFancyModal';

const student = {name:'Anna', grade:'A++'}

const [modalVisible, setModalVisible] = useState(false)

const Screen01 = ({ navigation }) => {
    return(
        <View style={myStyle.container}>
            <Text style={myStyle.header}>Screen01</Text>
            <Button 
                title='Ir para Screen02'
                onPress={ () => navigation.navigate('Screen02', student)}
            />
            {/* <Button 
                title="Show Modal"
                onPress={()=>setModalVisible(true)}
            /> */}
            {/* <MyFancyModal 
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            /> */}
        </View>
    )
}

export default Screen01;