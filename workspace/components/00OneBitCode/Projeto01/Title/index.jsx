import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Styling from '../Styling';


const Title = () => {
    return(
        <View style={Styling.boxTitle} >
            <Text style={Styling.textTitle}>BE HEALTHY</Text>
        </View>
    )
}

export default Title;