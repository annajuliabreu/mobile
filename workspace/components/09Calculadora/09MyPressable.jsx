import { Pressable, View, Text } from 'react-native'

const MyPressable = ({ funcao, titulo }) => {
    return (
        <View style={ { margin: 15 } }>
            <Pressable
                onPress={funcao}
                style={
                    ({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#E06C9F' : '#d43d7e',
                            padding: 4,
                        }
                    ]
                }
            >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{titulo}</Text>
            </Pressable>
        </View>
    )
}

export default MyPressable;