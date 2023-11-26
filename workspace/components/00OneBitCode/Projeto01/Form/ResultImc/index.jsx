import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Styling from '../../Styling';

const ResultImc = (props) => {
    return(
        <View style={Styling.resultImc}>
            <Text style={Styling.information}> {props.messageResultImc}</Text>
            <Text style={Styling.numberImc}>{props.resultImc}</Text>
        </View>
    )
}

export default ResultImc;