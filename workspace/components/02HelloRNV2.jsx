import { Text, View, ScrollView, Image, TextInput } from 'react-native';

const HelloRNV2 = () => {
    return (
        <ScrollView>
            <Text>React Native 4 Cats</Text>
            <Image
                source={
                    {
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }
                }
                style={
                    {
                        width: 200,
                        height: 200
                    }
                }
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 4,
                    paddingLeft: 10
                }}
                defaultValue="You can type in me"
            />
        </ScrollView>
    )
}


export default HelloRNV2;