import { View, Text, Image, Button } from 'react-native';
import { useState } from 'react';
import image01 from './image01.png';
import image02 from './image02.png';

const Questao01 = () => {
    const [img, setImg] = useState(image01);

    const changeImg = () => {
        if (img === image01) {
          setImg(image02)
        } else 
          setImg(image01)
        }
      }


    return(
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Image
                source={
                    // {uri: 'https://mir-s3-cdn-cf.behance.net/projects/202/c81f15143384521.Y3JvcCw4MTAsNjMzLDAsMA.png'}
                    image01
                }
                style={{ width: 166, height: 203}}
                
            />
            
            <Button 
                color="purple"
                title="PLAY"
                onPress={changeImg}               
            />

            <Text style={{fontSize:20, fontWeight: 'bold'}}>Anna Julia Abreu Lima de Souza</Text>
            <Text>Fortaleza/CE</Text>
            <Text style={{color:'red'}}>Design Digital, 8º semestre</Text>
            
        </View>
    )
}


export default Questao01;