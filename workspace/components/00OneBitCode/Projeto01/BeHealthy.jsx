import React from 'react';
import { View } from 'react-native';
import Main from './Main';
import Title from './Title';
import Styling from './Styling';
import Form from './Form';

const BeHealthy = () => {
    return(
        <View style={Styling.container}>
            <Title />
            <Form />
        </View>
    )
}

export default BeHealthy;