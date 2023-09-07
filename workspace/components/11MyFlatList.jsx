import {FlatList, StyleSheet, Text, View} from 'react-native';

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      fontWeight: 'bold',
    },
  });

// const dados = [
//     {key: 1,nome:"Anna", nota:10},
//     {key: 2,nome:"Talita", nota:10},
//     {key: 3,nome:"Ariadna", nota:10},
//     {key: 4,nome:"Nana", nota:8},
//     {key: 5,nome:"Lala", nota:9},
//     {key: 6,nome:"Bibi", nota:7},
//     {key: 7,nome:"Anna", nota:10},
//     {key: 8,nome:"Talita", nota:10},
//     {key: 9,nome:"Ariadna", nota:10},
//     {key: 10,nome:"Nana", nota:8},
//     {key: 11,nome:"Lala", nota:9},
//     {key: 12,nome:"Bibi", nota:7},
//     {key: 13,nome:"Anna", nota:10},
//     {key: 14,nome:"Talita", nota:10},
//     {key: 15,nome:"Ariadna", nota:10},
//     {key: 16,nome:"Nana", nota:8},
//     {key: 17,nome:"Lala", nota:9},
//     {key: 18,nome:"Bibi", nota:7},
//     {key: 19,nome:"Anna", nota:10},
//     {key: 20,nome:"Talita", nota:10},
//     {key: 21,nome:"Ariadna", nota:10},
//     {key: 22,nome:"Nana", nota:8},
//     {key: 23,nome:"Lala", nota:9},
//     {key: 24,nome:"Bibi", nota:7},
// ]

const dados = [
    {nome:'Anna', nota:10},
    {nome:'Julia', nota:10},
]

const MyFlatList = () => {
    return(
        <View style={estilos.container}>
            <FlatList
                data={dados}
                renderItem={
                    ({item})=>{
                        return(
                            <Text style={estilos.item}>
                                {item.nome} - {item.nota}
                            </Text>
                        )
                    }
                }
                keyExtractor={
                    (elemento)=>{
                        return elemento.nome + elemento
                    }
                }
            />
        </View>
    )
}

export default MyFlatList;