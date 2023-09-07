import { SectionList, StyleSheet, Text, View } from 'react-native';

const dados = [
    {
        title: 'J', data: [
            { nome: 'João', id: 2 },
            { nome: 'Joana', id: 3 },
            { nome: 'Julia', id: 1 },
        ]
    },
    {
        title: 'A', data: [
            { nome: 'Anna', id: 4 },
            { nome: 'Antonio', id: 5 },
            { nome: 'Ari', id: 6 },
        ]
    },
    {
        title: 'B', data: [
            { nome: 'Bibi', id: 7 },
            { nome: 'Bella', id: 8 },
            { nome: 'Bieber', id: 9 }
        ]
    }
]

const MySectionList = () => {
    return (
        <View style={estilos.container}>
            <SectionList
                sections={dados}
                keyExtractor={(item) => 'Entrada' + item.id}
                renderItem={
                    ({item}) => {
                        return (
                            <Text style={{ fontSize: 25 }}>{item.nome}</Text>
                        )
                    }
                }
                renderSectionHeader={
                    ({section}) => {
                        return (
                            <Text style={{ fontSize: 25, fontWeight: 'bold', backgroundColor: '#f070d0', flex:1 }}>{section.title}</Text>
                        )
                    }
                }
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 25,
        height: 667,
        width: 375,
    }
})

export default MySectionList;