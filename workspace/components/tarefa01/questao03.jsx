import { View, Text } from 'react-native';

const Questao03 = ({ cor }) => {


    return(
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize:20, fontWeight: 'bold', paddingBottom:10}}>Disciplinas favoritas do curso:</Text>
            
            <Text style={{color: cor}}>1. IHC - Interação Humano Computador</Text>
            <Text style={{color: cor}}>2. User Experience (UX)</Text>
            <Text style={{color: cor}}>3. Arquitetura da Informação</Text>
            <Text style={{color: cor}}>4. Tipografia</Text>
        </View>
    )
}

// const styles = StyleSheet.create({
//     cor: {
//       color: "pink"
//     }
//   });

export default Questao03;