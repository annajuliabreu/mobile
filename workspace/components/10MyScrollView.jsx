import { View, Text, Image, ScrollView } from 'react-native';

const logo = {
    uri: 'https://i.pinimg.com/564x/5e/03/3f/5e033fecf13118d3103b5ac66d61d715.jpg',
    height: 254,
    width: 256,
}

const MyScrollView = () => {
    return(
        <ScrollView>
            <View 
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    height: 667,
                    width: 375,
                    paddingTop: 25,
                    // backgroundColor: rgb(244, 239, 218),
                }}>
                <Text style={{ fontSize:25, fontWeight: 'bold', paddingBottom: 10 }}> PRAYER CHANGE THINGS </Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
            </View>
        </ScrollView>
    )
}

export default MyScrollView;