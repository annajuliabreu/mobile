import React from 'react';
import { Text, Image, View } from 'react-native';
import formMCU from './Form/form';

const LoginMCU = () => {
    return (
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                <Image
                    style={styles.tinyLogo}
                    source={require('@expo/snack-static/react-native-logo.png')}
                />
            </Text>
        </View>
    )
}

export default LoginMCU;