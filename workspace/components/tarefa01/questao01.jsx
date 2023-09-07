import { View, Text, Image, Button } from 'react-native';
import { useState } from 'react';

const Questao01 = () => {
    const image01 = 'https://i.pinimg.com/564x/ec/51/fd/ec51fd093f4f539886ea484f5388f8a2.jpg';
    const image02 = 'https://i.pinimg.com/564x/27/63/3d/27633def634eb3cf33424520e2d85309.jpg';
    const [image, setImage] = useState(image01);

    const changeImg = () => {
        if (image === image01) {
            setImage(image02)
        } else {
            setImage(image01)
        }
    }

    return (
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image
                source={
                    // {uri: 'https://mir-s3-cdn-cf.behance.net/projects/202/c81f15143384521.Y3JvcCw4MTAsNjMzLDAsMA.png'}
                    { uri: image }
                }
                style={{ width: 166, height: 203 }}

            />

            <Button
                color="purple"
                title="PLAY"
                onPress={changeImg}
            />

            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Anna Julia Abreu Lima de Souza</Text>
            <Text>Fortaleza/CE</Text>
            <Text style={{ color: 'red' }}>Design Digital, 8º semestre</Text>

        </View>
    )
}


export default Questao01;